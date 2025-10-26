import { useState } from "react";
import "./Nav.css";

function Nav({ servicesRef, aboutRef, contactRef, homeref }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false); // zatvori meni nakon klika
  };

  return (
    <div className="nav-container">
      <div className="Logo-name">Madex</div>

      {/* Hamburger dugme */}
      <div
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navigacija */}
      <ul className={`list-items ${menuOpen ? "open" : ""}`}>
        <li><a onClick={() => handleScrollTo(homeref)}>Početna stranica</a></li>
        <li><a onClick={() => handleScrollTo(servicesRef)}>Usluge</a></li>
        <li><a onClick={() => handleScrollTo(aboutRef)}>O nama</a></li>
        <li><a onClick={() => handleScrollTo(contactRef)}>Kontakt</a></li>
      </ul>
    </div>
  );
}

export default Nav;
