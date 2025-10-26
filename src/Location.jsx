import React, { useState, useEffect, useRef } from "react";
import "./Location.css";

function Location() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 } // 30% elementa mora biti vidljivo da bi se aktivirao efekat
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`location-container ${isVisible ? "visible" : ""}`}
      ref={sectionRef}
    >
      <iframe
        title="Google Map - MADEX ŠTAMPARIJA"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2784.988605339852!2d18.958569800000003!3d42.7468855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134da90015048615%3A0xaa047c3d8cb0cfc7!2sMADEX%20%C5%A0TAMPARIJA!5e1!3m2!1sen!2s!4v1760981241911!5m2!1sen!2s"
        width="400"
        height="300"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default Location;
