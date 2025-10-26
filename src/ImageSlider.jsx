import React, { useState, useEffect, useRef } from "react";
import "./ImageSlider.css";

import img1 from "./Pictures/stamparija-slider1.jpg";
import img2 from "./Pictures/stamparija-slider2.jpg";
import img3 from "./Pictures/stamparija-slider3.jpg";
import img4 from "./Pictures/stamparija7.jpg";
import img5 from './Pictures/stamparija-slider5.jpg';

const ImageSlider = () => {
  const [index, setIndex] = useState(0);
  const [animateKey, setAnimateKey] = useState(0); // ključ za reset animacije
  const sliderRef = useRef(null);

  const images = [
    { src: img1, alt: "Slika 1" },
    { src: img2, alt: "Slika 2" },
    { src: img3, alt: "Slika 3" },
    { src: img4, alt: "Slika 4" },
    { src: img5, alt: "Slika 5" },
  ];

  const prev = () => setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // povećamo key → CSS animacija se resetuje i ponavlja svaki put
            setAnimateKey((prev) => prev + 1);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sliderRef.current) observer.observe(sliderRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sliderRef}
      className="slider animate-on-scroll"
      key={animateKey} // 👈 ključ resetuje CSS animaciju
    >
      <div
        className="slider-track"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((img, i) => (
          <div className="slide" key={i}>
            <img src={img.src} alt={img.alt} />
          </div>
        ))}
      </div>

      <button className="nav-btn nav-left" onClick={prev} type="button">
        ‹
      </button>
      <button className="nav-btn nav-right" onClick={next} type="button">
        ›
      </button>
    </div>
  );
};

export default ImageSlider;
