import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import church from "../assets/sol-church.jpg";
import broadcast from "../assets/sol-broadcast.jpg";
import hero from "../assets/hero-foh.jpg";
import speakers from "../assets/cat-speakers.jpg";
import consol from "../assets/cat-consoles.jpg";
import wireless from "../assets/cat-wireless.jpg";
import prep from "../assets/prep-cases.jpg";
import { Reveal } from "../components/Reveal";
import { SOLUTIONS } from "../data/site";

const ART: Record<string, string> = {
  concerts: hero,
  churches: church,
  corporate: speakers,
  touring: prep,
  broadcast,
  events: consol,
  "production-companies": wireless,
};

export function Solutions() {
  const location = useLocation();

  useEffect(() => {
    const id = location.hash.replace(/^#/, "");
    if (!id) return;
    const t = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
    return () => window.clearTimeout(t);
  }, [location.hash, location.pathname]);

  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <p className="eyebrow">Solutions</p>
          <h1 className="display" style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)", marginTop: "0.85rem" }}>
            Systems shaped
            <br />
            around the room.
          </h1>
          <p className="muted" style={{ marginTop: "1rem", maxWidth: "40rem" }}>
            Concerts, churches, corporates, touring and broadcast: we match inventory and support
            to how your production actually runs.
          </p>
        </Reveal>

        <div style={{ marginTop: "3.5rem", display: "grid", gap: "4.5rem" }}>
          {SOLUTIONS.map((s, i) => {
            const imageLeft = i % 2 === 0;
            return (
              <Reveal key={s.slug}>
                <article
                  id={s.slug}
                  className={`solution-row ${imageLeft ? "" : "solution-row-flip"}`}
                  style={{ scrollMarginTop: "5.5rem" }}
                >
                  <div className="media-frame zoom-media solution-media">
                    <img src={ART[s.slug] || hero} alt="" style={{ opacity: 0.94 }} />
                  </div>
                  <div className="solution-copy">
                    <p className="mono" style={{ color: "var(--blue)", fontSize: "0.68rem", margin: 0 }}>
                      {String(i + 1).padStart(2, "0")}
                    </p>
                    <h2
                      className="display"
                      style={{
                        margin: "0.65rem 0 0",
                        fontSize: "clamp(1.75rem, 3vw, 2.4rem)",
                      }}
                    >
                      {s.name}
                    </h2>
                    <p
                      style={{
                        margin: "0.85rem 0 0",
                        fontSize: "1.05rem",
                        fontWeight: 500,
                        lineHeight: 1.55,
                      }}
                    >
                      {s.blurb}
                    </p>
                    <p className="muted" style={{ margin: "0.9rem 0 0", fontSize: "0.98rem", lineHeight: 1.75 }}>
                      {s.body}
                    </p>
                    <div className="btn-row" style={{ marginTop: "1.5rem" }}>
                      <Link
                        className="btn"
                        to="/contact"
                        state={{
                          solution: s.name,
                          interest: s.name,
                          notes: `Looking for a ${s.name.toLowerCase()} audio package.\n${s.blurb}\n\nKit / notes:`,
                        }}
                      >
                        Plan this show
                      </Link>
                      <Link className="btn btn-ghost" to="/rent">
                        Browse equipment
                      </Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
