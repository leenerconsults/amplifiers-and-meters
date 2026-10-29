import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import church from "../assets/sol-church.jpg";
import broadcast from "../assets/sol-broadcast.jpg";
import hero from "../assets/hero-foh.jpg";
import speakers from "../assets/cat-speakers.jpg";
import { Reveal } from "../components/Reveal";
import { SOLUTIONS } from "../data/site";

const ART: Record<string, string> = {
  concerts: hero,
  churches: church,
  corporate: speakers,
  touring: speakers,
  broadcast,
  events: hero,
  "production-companies": broadcast,
};

export function Solutions() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.slice(1);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [location.hash]);

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
            Concerts, churches, corporates, touring and broadcast: we match inventory and
            support to how your production actually runs.
          </p>
        </Reveal>
      </div>

      <div className="container-wide" style={{ marginTop: "2.5rem" }}>
        <div
          style={{
            display: "grid",
            gap: "1rem",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          }}
        >
          {SOLUTIONS.map((s, i) => (
            <Reveal key={s.slug} delay={i * 60}>
              <article
                id={s.slug}
                className="panel lift-card"
                style={{ overflow: "hidden", scrollMarginTop: "5.5rem", height: "100%" }}
              >
                <div className="media-frame zoom-media" style={{ height: "190px" }}>
                  <img src={ART[s.slug] || hero} alt="" style={{ opacity: 0.92 }} />
                </div>
                <div style={{ padding: "1.35rem" }}>
                  <h2 style={{ margin: 0, fontSize: "1.2rem" }}>{s.name}</h2>
                  <p className="muted" style={{ margin: "0.65rem 0 1.1rem", fontSize: "0.95rem" }}>
                    {s.blurb}
                  </p>
                  <Link
                    className="btn btn-ghost"
                    to="/contact"
                    state={{
                      solution: s.name,
                      interest: s.name,
                      notes: `Looking for a ${s.name.toLowerCase()} audio package. ${s.blurb}`,
                    }}
                  >
                    Plan this show
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
