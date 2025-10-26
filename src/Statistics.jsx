import './Statistics.css'
import React, { useState, useEffect, useRef } from "react";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import { IoPeople } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";

function Statistics() {
  const [counts, setCounts] = useState({
    years: 0,
    projects: 0,
    clients: 0,
    awards: 0,
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasAnimated) {
          startCounting();
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [hasAnimated]);

  const startCounting = () => {
    const targets = {
      years: 20,
      projects: 999,
      clients: 500,
      awards: 15,
    };

    const duration = 2000;
    const incrementTime = 30;

    Object.keys(targets).forEach((key) => {
      let start = 0;
      const end = targets[key];
      const step = (end - start) / (duration / incrementTime);

      const counter = setInterval(() => {
        start += step;
        if (start >= end) {
          start = end;
          clearInterval(counter);
        }
        setCounts((prev) => ({
          ...prev,
          [key]: Math.floor(start),
        }));
      }, incrementTime);
    });
  };

  return (
    <>
      <div className="statistics-container" ref={containerRef}>
        <div className="statistics-components">
          <MdOutlineCalendarMonth className='statistics-icons' />
          <h1 className='stat-title'>{counts.years}+</h1>
          <p className='stat-about'>GODINA POSLOVANJA</p>
        </div>

        <div className="statistics-components">
          <FaCheck className='statistics-icons' />
          <h1 className='stat-title'>{counts.projects}+</h1>
          <p className='stat-about'>ZAVRŠENIH PROJEKATA</p>
        </div>

        <div className="statistics-components">
          <IoPeople className='statistics-icons' />
          <h1 className='stat-title'>{counts.clients}+</h1>
          <p className='stat-about'>ZADOVOLJNIH KLIJENATA</p>
        </div>

        <div className="statistics-components">
          <FaHeart className='statistics-icons' />
          <h1 className='stat-title'>{counts.awards}+</h1>
          <p className='stat-about'>DOBIJENIH NAGRADA</p>
        </div>
      </div>
    </>
  );
}

export default Statistics;
