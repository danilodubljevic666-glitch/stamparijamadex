import { useEffect, useRef, useState } from "react";
import "./WelcomeSection.css";

function WelcomeSection({ servicesRef }) { // 🔹 primamo ref iz App.jsx
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
      observer.disconnect();
    };
  }, []);

  // 🔹 funkcija za scroll
  const handleScrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className={`welcome-section-container fade-in ${visible ? "visible" : ""}`}
      ref={ref}
    >
      <h1 className="welcome-section-title">Dobrodošli na naš website!</h1>
      <p className="welcome-section-paragraph">
        Štamparija Madex je firma nastala prije 20 godina, osnovana od strane
        Mladena Dubljevića. <br />
        Firma se bavi uslugama štampe na svakoj vrsti papira i folija, i
        brendiranjem vozila i objekata. <br />
        Saznajte više u nastavku!
      </p>
      <button
        className="welcome-section-btn"
        onClick={handleScrollToServices} // 👈 klik skroluje do Services
      >
        Saznajte više
      </button>
    </div>
  );
}

export default WelcomeSection;
