import React, { useState, useEffect, useRef } from "react";
import "./Gallery.css";

import papir1 from "./Pictures/stamparija1.jpg";
import papir2 from "./Pictures/stamparija1.jpg";
import papir3 from "./Pictures/stamparija1.jpg";
import papir4 from "./Pictures/stamparija1.jpg";
import papir5 from "./Pictures/stamparija1.jpg";
import papir6 from "./Pictures/stamparija1.jpg";

import vozilo1 from "./Pictures/stamparija2.jpg";
import vozilo2 from "./Pictures/stamparija2.jpg";
import vozilo3 from "./Pictures/stamparija2.jpg";
import vozilo4 from "./Pictures/stamparija2.jpg";
import vozilo5 from "./Pictures/stamparija2.jpg";
import vozilo6 from "./Pictures/stamparija2.jpg";

import kutija1 from "./Pictures/stamparija3.jpg";
import kutija2 from "./Pictures/stamparija3.jpg";
import kutija3 from "./Pictures/stamparija3.jpg";
import kutija4 from "./Pictures/stamparija3.jpg";
import kutija5 from "./Pictures/stamparija3.jpg";
import kutija6 from "./Pictures/stamparija3.jpg";

const Gallery = () => {
  const [filter, setFilter] = useState("sve");
  const containerRef = useRef(null);

  const images = [
    // 🟡 Papir
    { src: papir1, alt: "Papir 1", category: "papir" },
    { src: papir2, alt: "Papir 2", category: "papir" },
    { src: papir3, alt: "Papir 3", category: "papir" },
    { src: papir4, alt: "Papir 4", category: "papir" },
    { src: papir5, alt: "Papir 5", category: "papir" },
    { src: papir6, alt: "Papir 6", category: "papir" },

    // 🔵 Vozila
    { src: vozilo1, alt: "Vozilo 1", category: "vozila" },
    { src: vozilo2, alt: "Vozilo 2", category: "vozila" },
    { src: vozilo3, alt: "Vozilo 3", category: "vozila" },
    { src: vozilo4, alt: "Vozilo 4", category: "vozila" },
    { src: vozilo5, alt: "Vozilo 5", category: "vozila" },
    { src: vozilo6, alt: "Vozilo 6", category: "vozila" },

    // 🟢 Kutije
    { src: kutija1, alt: "Kutija 1", category: "kutije" },
    { src: kutija2, alt: "Kutija 2", category: "kutije" },
    { src: kutija3, alt: "Kutija 3", category: "kutije" },
    { src: kutija4, alt: "Kutija 4", category: "kutije" },
    { src: kutija5, alt: "Kutija 5", category: "kutije" },
    { src: kutija6, alt: "Kutija 6", category: "kutije" },
  ];

  const filteredImages =
    filter === "sve" ? images : images.filter((img) => img.category === filter);

  // IntersectionObserver: dodaj/ukloni klasu 'visible' na containeru
  useEffect(() => {
    const el = containerRef.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      // fallback: odmah prikaži ako nema observer podrške
      el && el.classList.add("visible");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.12, // koliko element treba biti vidljiv da se aktivira
      }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="gallery-container"
      aria-labelledby="gallery-title"
    >
      <h2 id="gallery-title" className="portfolio-title">Galerija</h2>

      {/* 🔘 Filter dugmad */}
      <div className="filter-buttons" role="tablist" aria-label="Filtriraj galeriju">
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

      {/* 🖼️ Mreža slika */}
      {filteredImages.length === 0 ? (
        <p className="no-images">Nema slika za izabranu kategoriju.</p>
      ) : (
        <div className="image-grid">
          {filteredImages.map((img, i) => (
            <div className="image-card" key={i}>
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.src =
                    "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D'400'%20height%3D'300'%20xmlns%3D'http%3A//www.w3.org/2000/svg'%3E%3Crect%20fill%3D'%23eee'%20width%3D'100%25'%20height%3D'100%25'/%3E%3Ctext%20x%3D'50%25'%20y%3D'50%25'%20dominant-baseline%3D'middle'%20text-anchor%3D'middle'%20fill%3D'%23999'%20font-size%3D'16'%3ESlika%20nije%20dostupna%3C/text%3E%3C/svg%3E";
                  e.currentTarget.alt = "Slika nije dostupna";
                }}
              />
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Gallery;
