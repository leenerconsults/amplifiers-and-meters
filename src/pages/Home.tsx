import { Link } from "react-router-dom";
import prep from "../assets/prep-cases.jpg";
import consol from "../assets/cat-consoles.jpg";
import speakers from "../assets/cat-speakers.jpg";
import wireless from "../assets/cat-wireless.jpg";
import church from "../assets/sol-church.jpg";
import broadcast from "../assets/sol-broadcast.jpg";
import { Reveal } from "../components/Reveal";
import { syncGridClass, WhyIcon } from "../components/WhyIcons";
import { STEPS, SUPPORT, TAGLINE, WHY } from "../data/site";

/** Mix of people + brand marks for social proof stack */
const TRUST_STACK = [
  { type: "photo" as const, src: "/trust/face-1.jpg" },
  { type: "logo" as const, src: "/trust/logo-wave.svg" },
  { type: "photo" as const, src: "/trust/face-2.jpg" },
  { type: "logo" as const, src: "/trust/logo-mark.svg" },
  { type: "photo" as const, src: "/trust/face-3.jpg" },
  { type: "logo" as const, src: "/trust/logo-ring.svg" },
  { type: "photo" as const, src: "/trust/face-4.jpg" },
];

const HERO_CATS = [
  { img: consol, label: "Consoles", to: "/rent" },
  { img: wireless, label: "Wireless", to: "/rent" },
  { img: speakers, label: "Speakers", to: "/rent" },
] as const;

export function Home() {
  return (
    <>
      <section className="section" style={{ paddingTop: "4.5rem", paddingBottom: "2.5rem" }}>
        <div className="container-wide">
          <div className="hero-editorial reveal">
            <div>
              <p className="eyebrow" style={{ marginBottom: "1.1rem" }}>
                Professional audio rental
              </p>
              <h1
                className="display"
                style={{
                  fontSize: "clamp(2.35rem, 4.6vw, 3.6rem)",
                  maxWidth: "14ch",
                  fontWeight: 700,
                }}
              >
                {TAGLINE}
              </h1>
            </div>
            <div style={{ alignSelf: "end", paddingBottom: "0.35rem" }}>
              <p className="muted" style={{ fontSize: "1.02rem", lineHeight: 1.7, maxWidth: "34rem" }}>
                {SUPPORT} Consoles, wireless, IEM, speakers and complete production packages,
                prepared for the room, ready for the cue.
              </p>
              <div className="btn-row" style={{ marginTop: "1.5rem" }}>
                <Link className="btn" to="/rent">
                  Rent equipment
                </Link>
                <Link className="btn btn-ghost" to="/contact">
                  Request a quote
                </Link>
              </div>
            </div>
          </div>

          <div
            className="reveal"
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "1rem 1.35rem",
              marginTop: "2.75rem",
              animationDelay: "0.15s",
            }}
          >
            <div className="avatar-stack" aria-hidden>
              {TRUST_STACK.map((item) => (
                <img
                  key={item.src}
                  src={item.src}
                  alt=""
                  width={44}
                  height={44}
                  className={item.type === "logo" ? "avatar-logo" : undefined}
                />
              ))}
              <span className="avatar-plus">+</span>
            </div>
            <div>
              <strong style={{ display: "block", fontSize: "0.98rem" }}>
                Trusted by production teams
              </strong>
              <span className="muted" style={{ fontSize: "0.9rem" }}>
                Engineers, churches, corporates and touring crews who need gear that shows up ready.
              </span>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gap: "1.15rem",
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
              marginTop: "2.75rem",
            }}
            className="hero-cats"
          >
            {HERO_CATS.map((c, i) => (
              <Reveal key={c.label} delay={i * 80}>
                <Link
                  to={c.to}
                  className="media-frame zoom-media lift-card"
                  style={{ height: "min(260px, 42vw)", display: "block" }}
                >
                  <img src={c.img} alt={c.label} style={{ opacity: 0.94 }} />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(to top, rgba(4,8,16,0.88), transparent 58%)",
                    }}
                  />
                  <span
                    className="mono"
                    style={{
                      position: "absolute",
                      left: "1rem",
                      bottom: "1rem",
                      fontSize: "0.72rem",
                      color: "#cfe0ff",
                    }}
                  >
                    {c.label}
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal>
            <p className="eyebrow">Why A&M</p>
            <h2
              className="display"
              style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", marginTop: "0.85rem", maxWidth: "16ch" }}
            >
              Built for people who cannot gamble on show day.
            </h2>
          </Reveal>
          <div className={`grid-hair ${syncGridClass(WHY.length)}`} style={{ marginTop: "2.25rem" }}>
            {WHY.map((item, i) => (
              <Reveal key={item.title} delay={i * 55}>
                <article className="lift-card" style={{ padding: "1.5rem", height: "100%" }}>
                  <div style={{ marginBottom: "0.95rem" }}>
                    <WhyIcon name={item.icon} />
                  </div>
                  <h3 style={{ margin: 0, fontSize: "1.05rem", fontWeight: 600 }}>{item.title}</h3>
                  <p className="muted" style={{ margin: "0.7rem 0 0", fontSize: "0.95rem" }}>
                    {item.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container-wide">
          <Reveal>
            <div
              style={{
                display: "grid",
                gap: "1.25rem",
                gridTemplateColumns: "1.2fr 0.8fr",
              }}
              className="split-band"
            >
              <div className="media-frame zoom-media" style={{ minHeight: "360px" }}>
                <img src={prep} alt="Flight cases prepared for dispatch" className="ken" />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(4,8,16,0.82), transparent 50%)",
                  }}
                />
                <div
                  className="on-dark"
                  style={{ position: "absolute", left: "1.25rem", bottom: "1.25rem", right: "1.25rem" }}
                >
                  <p className="eyebrow">Prepared</p>
                  <h2
                    className="display"
                    style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)", margin: "0.5rem 0 0" }}
                  >
                    Tested before it leaves the floor.
                  </h2>
                </div>
              </div>
              <div style={{ display: "grid", gap: "1.25rem" }}>
                <Link
                  to="/solutions#churches"
                  className="media-frame zoom-media lift-card"
                  style={{ minHeight: "170px" }}
                >
                  <img src={church} alt="Church / worship production" style={{ opacity: 0.9 }} />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(to top, rgba(4,8,16,0.88), transparent 60%)",
                    }}
                  />
                  <span
                    className="mono"
                    style={{
                      position: "absolute",
                      left: "1rem",
                      bottom: "1rem",
                      fontSize: "0.7rem",
                      color: "#f2f5fb",
                    }}
                  >
                    Churches →
                  </span>
                </Link>
                <Link
                  to="/solutions#broadcast"
                  className="media-frame zoom-media lift-card"
                  style={{ minHeight: "170px" }}
                >
                  <img src={broadcast} alt="Broadcast / capture environment" style={{ opacity: 0.9 }} />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(to top, rgba(4,8,16,0.88), transparent 60%)",
                    }}
                  />
                  <span
                    className="mono"
                    style={{
                      position: "absolute",
                      left: "1rem",
                      bottom: "1rem",
                      fontSize: "0.7rem",
                      color: "#f2f5fb",
                    }}
                  >
                    Broadcast →
                  </span>
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal>
            <p className="eyebrow">How it works</p>
            <h2 className="display" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginTop: "0.85rem" }}>
              Six steps. No theatre.
            </h2>
          </Reveal>
          <ol
            style={{
              listStyle: "none",
              padding: 0,
              margin: "2rem 0 0",
              display: "grid",
              gap: "0.75rem",
            }}
          >
            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 45}>
                <li
                  className="panel lift-card"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "4.5rem 1fr",
                    gap: "1rem",
                    padding: "1.15rem 1.25rem",
                    alignItems: "start",
                  }}
                >
                  <span className="mono" style={{ color: "var(--blue)", fontSize: "0.75rem" }}>
                    {s.n}
                  </span>
                  <div>
                    <strong style={{ display: "block", fontSize: "1.02rem" }}>{s.title}</strong>
                    <span className="muted" style={{ fontSize: "0.92rem" }}>
                      {s.body}
                    </span>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
          <div className="btn-row" style={{ marginTop: "1.75rem" }}>
            <Link className="btn" to="/services#how-it-works">
              Full process
            </Link>
            <Link className="btn btn-ghost" to="/contact">
              Start a request
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 860px) {
          .split-band { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
