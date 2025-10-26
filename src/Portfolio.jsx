import React, { useState, useEffect, useRef } from "react";
import "./Portfolio.css";

import papir1 from "./Pictures/stamparija1.jpg";
import papir2 from "./Pictures/stamparija2.jpg";
import papir3 from "./Pictures/stamparija3.jpg";
import papir4 from "./Pictures/stamparija4.jpg";

import vozilo1 from "./Pictures/stamparija-vozila1.jpg";
import vozilo2 from "./Pictures/stamparija-vozila2.jpg";
import vozilo3 from "./Pictures/stamparija-vozila3.jpg";
import vozilo4 from "./Pictures/stamparija-vozila4.jpg";

import kutija1 from "./Pictures/kutije1.jpg";
import kutija2 from "./Pictures/kutije2.jpg";
import kutija3 from "./Pictures/kutije3.jpg";
import kutija4 from "./Pictures/kutije4.jpg";

function Portfolio() {
  const [filter, setFilter] = useState("sve");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const images = [
    { src: papir1, alt: "Papir 1", category: "papir" },
    { src: papir2, alt: "Papir 2", category: "papir" },
    { src: papir3, alt: "Papir 3", category: "papir" },
    { src: papir4, alt: "Papir 4", category: "papir" },

    { src: vozilo1, alt: "Vozilo 1", category: "vozila" },
    { src: vozilo2, alt: "Vozilo 2", category: "vozila" },
    { src: vozilo3, alt: "Vozilo 3", category: "vozila" },
    { src: vozilo4, alt: "Vozilo 4", category: "vozila" },

    { src: kutija1, alt: "Kutija 1", category: "kutije" },
    { src: kutija2, alt: "Kutija 2", category: "kutije" },
    { src: kutija3, alt: "Kutija 3", category: "kutije" },
    { src: kutija4, alt: "Kutija 4", category: "kutije" },
  ];

  const filteredImages =
    filter === "sve" ? images : images.filter((img) => img.category === filter);

  useEffect(() => {
    // Ako je tiny screen, odmah prikaži (fix za mobilne viewporte u DevTools)
    if (typeof window !== "undefined" && window.innerWidth <= 425) {
      setIsVisible(true);
      return; // ne treba observer
    }

    const node = sectionRef.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        // entry.intersectionRatio može biti mali na mobilu — koristimo isIntersecting ali sa rootMargin i manjim threshold
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "0px 0px -10% 0px", // trigger nešto ranije (kada je dolje 10% izvan viewporta)
        threshold: 0.12, // manji threshold, lakše postane vidljivo
      }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`gallery-container ${isVisible ? "visible" : "hidden"}`}
      aria-labelledby="portfolio-title"
    >
      <h2 id="portfolio-title" className="portfolio-title">
        Galerija
      </h2>

      <div
        className="filter-buttons"
        role="tablist"
        aria-label="Filtriraj galeriju"
      >
        <button
          role="tab"
          aria-selected={filter === "sve"}
          className={filter === "sve" ? "active" : ""}
          onClick={() => setFilter("sve")}
        >
          Sve
        </button>
        <button
          role="tab"
          aria-selected={filter === "papir"}
          className={filter === "papir" ? "active" : ""}
          onClick={() => setFilter("papir")}
        >
          Papir
        </button>
        <button
          role="tab"
          aria-selected={filter === "vozila"}
          className={filter === "vozila" ? "active" : ""}
          onClick={() => setFilter("vozila")}
        >
          Vozila
        </button>
        <button
          role="tab"
          aria-selected={filter === "kutije"}
          className={filter === "kutije" ? "active" : ""}
          onClick={() => setFilter("kutije")}
        >
          Kutije
        </button>
      </div>

      <div className="image-grid" aria-live="polite">
        {filteredImages.map((img, i) => (
          <div className="image-card" key={i}>
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              onError={(e) => {
                e.currentTarget.src =
                  "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D'600'%20height%3D'400'%20xmlns%3D'http%3A//www.w3.org/2000/svg'%3E%3Crect%20fill%3D'%23eee'%20width%3D'100%25'%20height%3D'100%25'/%3E%3Ctext%20x%3D'50%25'%20y%3D'50%25'%20dominant-baseline%3D'middle'%20text-anchor%3D'middle'%20fill%3D'%23999'%20font-size%3D'18'%3ESlika%20nije%20dostupna%3C/text%3E%3C/svg%3E";
                e.currentTarget.alt = "Slika nije dostupna";
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
