import { useEffect, useMemo, useState, type FormEvent } from "react";
import { useLocation } from "react-router-dom";
import { EMAIL, whatsappHref } from "../data/site";

export type ContactPrefill = {
  interest?: string;
  solution?: string;
  category?: string;
  notes?: string;
};

function buildNeed(prefill: ContactPrefill) {
  const solution = prefill.solution || prefill.interest;
  const lines: string[] = [];
  if (solution) lines.push(`Solution: ${solution}`);
  if (prefill.category) lines.push(`Category: ${prefill.category}`);
  if (prefill.notes) lines.push(prefill.notes);
  if (solution && !prefill.notes) {
    lines.push("Kit / notes:");
  }
  return lines.join("\n");
}

export function Contact() {
  const location = useLocation();
  const prefill = (location.state as ContactPrefill | null) || {};
  const solution = prefill.solution || prefill.interest || "";

  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    dates: "",
    venue: "",
    need: buildNeed(prefill),
  });

  useEffect(() => {
    const next = (location.state as ContactPrefill | null) || {};
    setForm((f) => ({
      ...f,
      need: buildNeed(next) || f.need,
    }));
    setSent(false);
  }, [location.state, location.key]);

  const waMessage = useMemo(() => {
    return [
      "Hi A&M - quote request",
      solution && `Solution: ${solution}`,
      form.name && `Name: ${form.name}`,
      form.email && `Email: ${form.email}`,
      form.phone && `Phone: ${form.phone}`,
      form.dates && `Dates: ${form.dates}`,
      form.venue && `Venue / show: ${form.venue}`,
      form.need && `Need:\n${form.need}`,
    ]
      .filter(Boolean)
      .join("\n");
  }, [form, solution]);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    window.open(whatsappHref(waMessage), "_blank", "noopener,noreferrer");
    setSent(true);
  }

  const mailSubject = solution
    ? `A&M quote request - ${solution}`
    : "A&M quote request";

  return (
    <section className="section">
      <div className="container" style={{ maxWidth: "760px" }}>
        <p className="eyebrow">Contact / request a quote</p>
        <h1 className="display" style={{ fontSize: "clamp(2.4rem, 5vw, 3.8rem)", marginTop: "0.85rem" }}>
          Tell us what
          <br />
          the show needs.
        </h1>
        <p className="muted" style={{ marginTop: "1rem" }}>
          {solution
            ? `You started from ${solution}. Add dates and details below and we will confirm availability.`
            : "Send a list or describe the production. We confirm availability and recommend the right solution."}{" "}
          Prefer WhatsApp? Use the button after you fill the form, or email{" "}
          <a href={`mailto:${EMAIL}`} style={{ color: "var(--blue)" }}>
            {EMAIL}
          </a>
          .
        </p>

        {solution ? (
          <div
            className="mono"
            style={{
              display: "inline-flex",
              marginTop: "1.25rem",
              padding: "0.45rem 0.75rem",
              border: "1px solid var(--line)",
              background: "var(--blue-dim)",
              color: "var(--blue)",
              fontSize: "0.68rem",
            }}
          >
            Planning: {solution}
          </div>
        ) : null}

        <form onSubmit={onSubmit} className="panel" style={{ marginTop: "1.35rem", padding: "1.5rem" }}>
          <div
            style={{
              display: "grid",
              gap: "1rem",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            }}
          >
            <label className="label">
              Name
              <input
                required
                className="field"
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
              />
            </label>
            <label className="label">
              Email
              <input
                required
                type="email"
                className="field"
                value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
              />
            </label>
            <label className="label">
              Phone
              <input
                required
                className="field"
                value={form.phone}
                onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
              />
            </label>
            <label className="label">
              Dates
              <input
                className="field"
                placeholder="e.g. 12-14 Nov"
                value={form.dates}
                onChange={(e) => setForm((f) => ({ ...f, dates: e.target.value }))}
              />
            </label>
            <label className="label" style={{ gridColumn: "1 / -1" }}>
              Venue / production
              <input
                className="field"
                placeholder={
                  solution ? `${solution} venue or production name` : "Venue or production name"
                }
                value={form.venue}
                onChange={(e) => setForm((f) => ({ ...f, venue: e.target.value }))}
              />
            </label>
            <label className="label" style={{ gridColumn: "1 / -1" }}>
              Equipment / notes
              <textarea
                required
                rows={5}
                className="field"
                value={form.need}
                onChange={(e) => setForm((f) => ({ ...f, need: e.target.value }))}
              />
            </label>
          </div>

          <div className="btn-row" style={{ marginTop: "1.35rem" }}>
            <button type="submit" className="btn">
              Send via WhatsApp
            </button>
            <a
              className="btn btn-ghost"
              href={`mailto:${EMAIL}?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(waMessage)}`}
            >
              Email instead
            </a>
          </div>
          {sent ? (
            <p className="muted" style={{ marginTop: "1rem", fontSize: "0.9rem" }}>
              WhatsApp opened with your details. Update the number in site settings when the live
              line is ready.
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}
