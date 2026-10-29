import { useEffect, useRef, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import logo from "../assets/logo-light.png";
import { BRAND, whatsappHref } from "../data/site";

type DropItem = { to: string; label: string; hash?: string };

const SERVICES_DROP: DropItem[] = [
  { to: "/services", label: "Technical Services" },
  { to: "/services", label: "How It Works", hash: "#how-it-works" },
];

function hrefOf(item: DropItem) {
  return item.hash ? `${item.to}${item.hash}` : item.to;
}

function DesktopDrop({
  label,
  items,
  active,
}: {
  label: string;
  items: DropItem[];
  active: boolean;
}) {
  const [open, setOpen] = useState(false);
  const wrap = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (!wrap.current?.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  return (
    <div
      ref={wrap}
      style={{ position: "relative" }}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className="nav-link"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        style={{
          padding: "0.45rem 0.7rem",
          fontSize: "0.78rem",
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          color: active || open ? "var(--blue)" : "var(--muted)",
          border: "none",
          borderBottom:
            active || open ? "1px solid var(--blue)" : "1px solid transparent",
          background: "transparent",
          cursor: "pointer",
          display: "inline-flex",
          alignItems: "center",
          gap: "0.35rem",
        }}
      >
        {label}
        <span aria-hidden style={{ fontSize: "0.65rem", opacity: 0.7 }}>
          ▾
        </span>
      </button>
      {open ? (
        <div
          role="menu"
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            minWidth: "12.5rem",
            padding: "0.4rem",
            background: "#fff",
            border: "1px solid var(--line)",
            boxShadow: "0 14px 36px rgba(12, 26, 58, 0.12)",
            zIndex: 50,
          }}
        >
          {items.map((item) => (
            <Link
              key={item.label}
              to={hrefOf(item)}
              role="menuitem"
              onClick={() => setOpen(false)}
              style={{
                display: "block",
                padding: "0.65rem 0.75rem",
                fontSize: "0.86rem",
                color: "var(--text)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--panel-2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export function Layout() {
  const [open, setOpen] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
    setMobileServices(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (!location.hash) window.scrollTo(0, 0);
  }, [location.pathname]);

  const servicesActive = location.pathname.startsWith("/services");

  return (
    <div className="site">
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 40,
          borderBottom: "1px solid var(--line)",
          background: "rgba(255, 255, 255, 0.88)",
          backdropFilter: "blur(16px)",
        }}
      >
        <div
          className="container-wide"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
            minHeight: "4.25rem",
          }}
        >
          <Link to="/" aria-label={BRAND} style={{ display: "flex", alignItems: "center" }}>
            <img
              src={logo}
              alt={BRAND}
              width={148}
              height={56}
              style={{ height: "2.35rem", width: "auto" }}
            />
          </Link>

          <nav
            className="desktop-nav"
            style={{
              display: "none",
              alignItems: "center",
              gap: "0.1rem",
              justifyContent: "flex-end",
            }}
          >
            <NavLink
              to="/"
              end
              style={({ isActive }) => ({
                padding: "0.45rem 0.7rem",
                fontSize: "0.78rem",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: isActive ? "var(--blue)" : "var(--muted)",
                borderBottom: isActive ? "1px solid var(--blue)" : "1px solid transparent",
              })}
            >
              Home
            </NavLink>
            <NavLink
              to="/rent"
              style={({ isActive }) => ({
                padding: "0.45rem 0.7rem",
                fontSize: "0.78rem",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: isActive ? "var(--blue)" : "var(--muted)",
                borderBottom: isActive ? "1px solid var(--blue)" : "1px solid transparent",
              })}
            >
              Rent
            </NavLink>
            <NavLink
              to="/solutions"
              style={({ isActive }) => ({
                padding: "0.45rem 0.7rem",
                fontSize: "0.78rem",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: isActive ? "var(--blue)" : "var(--muted)",
                borderBottom: isActive ? "1px solid var(--blue)" : "1px solid transparent",
              })}
            >
              Solutions
            </NavLink>
            <DesktopDrop label="Services" items={SERVICES_DROP} active={servicesActive} />
            <NavLink
              to="/about"
              style={({ isActive }) => ({
                padding: "0.45rem 0.7rem",
                fontSize: "0.78rem",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: isActive ? "var(--blue)" : "var(--muted)",
                borderBottom: isActive ? "1px solid var(--blue)" : "1px solid transparent",
              })}
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              style={({ isActive }) => ({
                padding: "0.45rem 0.7rem",
                fontSize: "0.78rem",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: isActive ? "var(--blue)" : "var(--muted)",
                borderBottom: isActive ? "1px solid var(--blue)" : "1px solid transparent",
              })}
            >
              Contact
            </NavLink>
            <a
              className="btn"
              href={whatsappHref("Hi A&M - I'd like to talk about a production.")}
              target="_blank"
              rel="noreferrer"
              style={{ marginLeft: "0.5rem", minHeight: "2.4rem", padding: "0.45rem 0.95rem" }}
            >
              Talk to A&M
            </a>
          </nav>

          <button
            type="button"
            className="mobile-toggle btn-ghost"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            style={{
              display: "inline-flex",
              minHeight: "2.4rem",
              padding: "0.4rem 0.75rem",
              border: "1px solid var(--line)",
              background: "transparent",
              cursor: "pointer",
            }}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>

        {open ? (
          <div
            style={{
              borderTop: "1px solid var(--line)",
              background: "#fff",
              padding: "1rem 0 1.25rem",
            }}
          >
            <div className="container" style={{ display: "grid", gap: "0.2rem" }}>
              {[
                { to: "/", label: "Home", end: true },
                { to: "/rent", label: "Rent" },
                { to: "/solutions", label: "Solutions" },
                { to: "/about", label: "About" },
                { to: "/contact", label: "Contact" },
              ].map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.end}
                  style={({ isActive }) => ({
                    padding: "0.75rem 0",
                    borderBottom: "1px solid var(--line)",
                    color: isActive ? "var(--blue)" : "var(--text)",
                    fontSize: "0.95rem",
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                  })}
                >
                  {item.label}
                </NavLink>
              ))}

              <button
                type="button"
                onClick={() => setMobileServices((v) => !v)}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  padding: "0.75rem 0",
                  border: "none",
                  borderBottom: "1px solid var(--line)",
                  background: "transparent",
                  textTransform: "uppercase",
                  letterSpacing: "0.04em",
                  fontSize: "0.95rem",
                  cursor: "pointer",
                  color: servicesActive ? "var(--blue)" : "var(--text)",
                }}
              >
                Services <span>{mobileServices ? "−" : "+"}</span>
              </button>
              {mobileServices
                ? SERVICES_DROP.map((item) => (
                    <Link
                      key={item.label}
                      to={hrefOf(item)}
                      style={{
                        padding: "0.55rem 0 0.55rem 0.85rem",
                        color: "var(--muted)",
                        borderBottom: "1px solid var(--line)",
                        fontSize: "0.9rem",
                      }}
                    >
                      {item.label}
                    </Link>
                  ))
                : null}

              <a
                className="btn"
                href={whatsappHref("Hi A&M - I'd like to talk about a production.")}
                target="_blank"
                rel="noreferrer"
                style={{ marginTop: "0.75rem" }}
              >
                Talk to A&M
              </a>
            </div>
          </div>
        ) : null}
      </header>

      <main>
        <Outlet />
      </main>

      <footer
        style={{
          marginTop: "2rem",
          borderTop: "1px solid var(--line)",
          padding: "3.5rem 0 2rem",
          background: "linear-gradient(180deg, transparent, #e8edf4)",
        }}
      >
        <div className="container-wide">
          <div
            style={{
              display: "grid",
              gap: "2rem",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              marginBottom: "2.5rem",
            }}
          >
            <div>
              <img src={logo} alt="" width={160} height={60} style={{ height: "2.5rem", width: "auto" }} />
              <p className="muted" style={{ marginTop: "1rem", maxWidth: "28ch", fontSize: "0.95rem" }}>
                Professional audio rental & technical solutions.
              </p>
            </div>
            <div>
              <div className="mono" style={{ color: "var(--blue)", fontSize: "0.7rem", marginBottom: "0.85rem" }}>
                Navigate
              </div>
              <div style={{ display: "grid", gap: "0.45rem" }}>
                <Link to="/rent" className="muted" style={{ fontSize: "0.92rem" }}>
                  Rent
                </Link>
                <Link to="/solutions" className="muted" style={{ fontSize: "0.92rem" }}>
                  Solutions
                </Link>
                <Link to="/services" className="muted" style={{ fontSize: "0.92rem" }}>
                  Services
                </Link>
                <Link to="/services#how-it-works" className="muted" style={{ fontSize: "0.92rem" }}>
                  How it works
                </Link>
                <Link to="/about" className="muted" style={{ fontSize: "0.92rem" }}>
                  About
                </Link>
                <Link to="/contact" className="muted" style={{ fontSize: "0.92rem" }}>
                  Contact
                </Link>
              </div>
            </div>
            <div>
              <div className="mono" style={{ color: "var(--blue)", fontSize: "0.7rem", marginBottom: "0.85rem" }}>
                Start
              </div>
              <div className="btn-row">
                <Link className="btn" to="/contact">
                  Request a quote
                </Link>
                <Link className="btn btn-ghost" to="/rent">
                  Rent equipment
                </Link>
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.75rem",
              justifyContent: "space-between",
              borderTop: "1px solid var(--line)",
              paddingTop: "1.25rem",
              color: "var(--muted)",
              fontSize: "0.8rem",
            }}
          >
            <span>© {new Date().getFullYear()} Amplifiers & Meters</span>
            <span>Professional Audio. Ready for the Show.</span>
          </div>
        </div>
      </footer>

      <style>{`
        @media (min-width: 980px) {
          .desktop-nav { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </div>
  );
}
