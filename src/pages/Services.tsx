import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Reveal } from "../components/Reveal";
import { syncGridClass } from "../components/WhyIcons";
import { SERVICES, STEPS } from "../data/site";

export function Services() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#how-it-works") {
      const el = document.getElementById("how-it-works");
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [location.hash]);

  return (
    <>
      <section className="section">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Technical services</p>
            <h1
              className="display"
              style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)", marginTop: "0.85rem" }}
            >
              More than boxes
              <br />
              on a truck.
            </h1>
            <p className="muted" style={{ marginTop: "1rem", maxWidth: "40rem" }}>
              Rental, packages, RF, monitoring, tech support and system design: the technical
              layer productions actually need.
            </p>
          </Reveal>

          <div className={`grid-hair ${syncGridClass(SERVICES.length)}`} style={{ marginTop: "2.5rem" }}>
            {SERVICES.map((s, i) => (
              <Reveal key={s.title} delay={i * 50}>
                <article className="lift-card" style={{ padding: "1.5rem", height: "100%" }}>
                  <span className="mono" style={{ color: "var(--blue)", fontSize: "0.68rem" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 style={{ margin: "0.7rem 0 0", fontSize: "1.1rem" }}>{s.title}</h2>
                  <p className="muted" style={{ margin: "0.65rem 0 0", fontSize: "0.94rem" }}>
                    {s.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="section" style={{ paddingTop: 0, scrollMarginTop: "5.5rem" }}>
        <div className="container">
          <Reveal>
            <p className="eyebrow">How it works</p>
            <h2 className="display" style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", marginTop: "0.85rem" }}>
              Six steps. No theatre.
            </h2>
            <p className="muted" style={{ marginTop: "0.85rem", maxWidth: "36rem" }}>
              From first message to return: one clear path so production managers and engineers
              know what happens next.
            </p>
          </Reveal>

          <div style={{ marginTop: "2rem", display: "grid", gap: "0.75rem" }}>
            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 40}>
                <article
                  className="panel lift-card"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "minmax(4rem, 5.5rem) 1fr",
                    gap: "1.25rem",
                    padding: "1.35rem",
                  }}
                >
                  <span className="display" style={{ color: "var(--blue)", fontSize: "1.5rem" }}>
                    {s.n}
                  </span>
                  <div>
                    <h3 style={{ margin: 0, fontSize: "1.1rem" }}>{s.title}</h3>
                    <p className="muted" style={{ margin: "0.5rem 0 0" }}>
                      {s.body}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="btn-row" style={{ marginTop: "2rem" }}>
            <Link className="btn" to="/contact">
              Tell us what you need
            </Link>
            <Link className="btn btn-ghost" to="/rent">
              Browse equipment
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
