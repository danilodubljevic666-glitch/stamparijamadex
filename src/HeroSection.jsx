import React, { useEffect, useRef, useState } from "react";
import "./HeroSection.css";

function HeroSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    // Praćenje kada komponenta uđe u viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        // ako želiš da se fade-in desi samo jednom, koristi samo if (entry.isIntersecting)
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.3 } // aktivira se kad je 30% komponente vidljivo
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div className="hero-container" ref={ref}>
        <div className={`glass ${visible ? "visible" : ""}`}>
          <p className={`home-title ${visible ? "loaded" : ""}`}>
            Štamparija <br /> Madex
          </p>
          <p className={`about ${visible ? "loaded" : ""}`}>
           Gradimo vizuelni identitet kroz savršeno odštampane materijale.<br /> Neka vaš brend govori jasno, upečatljivo i profesionalno.
  
          </p>
          <button className={`about-us-btn ${visible ? "loaded" : ""}`}>
            O nama
          </button>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
