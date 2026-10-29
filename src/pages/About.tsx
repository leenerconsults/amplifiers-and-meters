import { Link } from "react-router-dom";
import prep from "../assets/prep-cases.jpg";
import { POSITIONING, TAGLINE } from "../data/site";

export function About() {
  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow">About A&M</p>
        <h1 className="display" style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)", marginTop: "0.85rem" }}>
          A technical resource
          <br />
          for the production industry.
        </h1>
      </div>

      <div className="container-wide" style={{ marginTop: "2.5rem" }}>
        <div className="media-frame" style={{ height: "min(420px, 55vw)" }}>
          <img src={prep} alt="Prepared cases and production inventory" className="ken" />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to top, rgba(5,7,12,0.88), transparent 55%)",
            }}
          />
        </div>
      </div>

      <div className="container" style={{ marginTop: "2.5rem", maxWidth: "720px" }}>
        <p style={{ fontSize: "1.15rem", lineHeight: 1.7 }}>
          Amplifiers & Meters is a professional audio equipment rental and technical solutions
          company. We supply high-quality systems for concerts, churches, corporate events,
          festivals, touring, broadcast and production companies.
        </p>
        <p className="muted" style={{ marginTop: "1.1rem", fontSize: "1.02rem", lineHeight: 1.7 }}>
          More than a hire desk: we help sound engineers, production teams and organisations
          access the right equipment without owning every piece themselves. Focus: professional
          inventory, readiness, technical expertise, and a clean path from enquiry to return.
        </p>
        <p className="mono" style={{ marginTop: "1.75rem", color: "var(--blue)", fontSize: "0.78rem" }}>
          {POSITIONING}
        </p>
        <p className="display" style={{ marginTop: "0.65rem", fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}>
          {TAGLINE}
        </p>
        <div className="btn-row" style={{ marginTop: "1.75rem" }}>
          <Link className="btn" to="/contact">
            Work with A&M
          </Link>
          <Link className="btn btn-ghost" to="/how-it-works">
            How it works
          </Link>
        </div>
      </div>
    </section>
  );
}
