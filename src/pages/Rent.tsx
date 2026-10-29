import { Link } from "react-router-dom";
import consol from "../assets/cat-consoles.jpg";
import speakers from "../assets/cat-speakers.jpg";
import wireless from "../assets/cat-wireless.jpg";
import prep from "../assets/prep-cases.jpg";
import { Reveal } from "../components/Reveal";
import { EQUIPMENT_CATEGORIES } from "../data/site";

const COVER: Record<string, string> = {
  consoles: consol,
  stageboxes: consol,
  microphones: wireless,
  wireless,
  iem: wireless,
  speakers,
  amplifiers: speakers,
  monitoring: speakers,
  signal: prep,
  comms: prep,
  accessories: prep,
};

export function Rent() {
  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow">Rent equipment</p>
        <h1 className="display" style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)", marginTop: "0.85rem" }}>
          The kit list,
          <br />
          without the noise.
        </h1>
        <p className="muted" style={{ marginTop: "1rem", maxWidth: "40rem" }}>
          Browse by category. Tell us what you need, or send a full list, and we confirm
          availability, recommend the right package, and prepare gear for dispatch.
        </p>
        <div className="btn-row" style={{ marginTop: "1.4rem" }}>
          <Link className="btn" to="/contact">
            Request a quote
          </Link>
        </div>
      </div>

      <div className="container-wide" style={{ marginTop: "2.75rem" }}>
        <div className="card-grid" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))" }}>
          {EQUIPMENT_CATEGORIES.map((cat, i) => (
            <Reveal key={cat.slug} delay={(i % 4) * 45}>
              <Link
                to="/contact"
                state={{
                  category: cat.name,
                  interest: cat.name,
                  notes: `Category: ${cat.name}. ${cat.blurb}\nKit / notes:`,
                }}
                className="lift-card"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  minHeight: "280px",
                  height: "100%",
                  border: "1px solid var(--line)",
                  background: "var(--bg-elev)",
                }}
              >
                <div className="media-frame zoom-media" style={{ height: "150px" }}>
                  <img src={COVER[cat.slug] || prep} alt="" style={{ opacity: 0.9 }} />
                </div>
                <div style={{ padding: "1.25rem 1.2rem 1.4rem", flex: 1 }}>
                  <h2 style={{ margin: 0, fontSize: "1.05rem" }}>{cat.name}</h2>
                  <p className="muted" style={{ margin: "0.55rem 0 0", fontSize: "0.9rem" }}>
                    {cat.blurb}
                  </p>
                  <span
                    className="mono"
                    style={{
                      display: "inline-block",
                      marginTop: "1rem",
                      fontSize: "0.65rem",
                      color: "var(--blue)",
                    }}
                  >
                    Enquire →
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
