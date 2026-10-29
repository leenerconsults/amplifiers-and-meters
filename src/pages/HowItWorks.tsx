import { Link } from "react-router-dom";
import { STEPS } from "../data/site";

export function HowItWorks() {
  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow">How it works</p>
        <h1 className="display" style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)", marginTop: "0.85rem" }}>
          Keep it extremely
          <br />
          simple.
        </h1>
        <p className="muted" style={{ marginTop: "1rem", maxWidth: "36rem" }}>
          From first message to return: one clear path so production managers and engineers
          know what happens next.
        </p>

        <div style={{ marginTop: "2.5rem", display: "grid", gap: "0.85rem" }}>
          {STEPS.map((s, i) => (
            <div key={s.n}>
              <article
                className="panel"
                style={{
                  display: "grid",
                  gridTemplateColumns: "minmax(4rem, 5.5rem) 1fr",
                  gap: "1.25rem",
                  padding: "1.4rem 1.35rem",
                }}
              >
                <span className="display" style={{ color: "var(--blue)", fontSize: "1.6rem" }}>
                  {s.n}
                </span>
                <div>
                  <h2 style={{ margin: 0, fontSize: "1.2rem" }}>{s.title}</h2>
                  <p className="muted" style={{ margin: "0.55rem 0 0" }}>
                    {s.body}
                  </p>
                </div>
              </article>
              {i < STEPS.length - 1 ? (
                <div
                  aria-hidden
                  style={{
                    width: 1,
                    height: 18,
                    margin: "0.15rem 0 0.15rem 2.4rem",
                    background: "var(--blue-dim)",
                  }}
                />
              ) : null}
            </div>
          ))}
        </div>

        <div className="btn-row" style={{ marginTop: "2rem" }}>
          <Link className="btn" to="/contact">
            Tell us what you need
          </Link>
        </div>
      </div>
    </section>
  );
}
