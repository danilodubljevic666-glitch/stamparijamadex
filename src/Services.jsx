import { useEffect, useRef, useState } from "react";
import "./Services.css";
import { FiPrinter } from "react-icons/fi";
import { HiOutlineNewspaper } from "react-icons/hi2";
import { PiTShirtBold, PiNewspaperClipping } from "react-icons/pi";
import { BsCardText } from "react-icons/bs";
import { FaBoxOpen } from "react-icons/fa6";
import { FaCarAlt } from "react-icons/fa";
import { LuHouse } from "react-icons/lu";
import { HiDotsHorizontal } from "react-icons/hi";

function Services() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 } // aktivira se kad je 20% vidljivo
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`services-container ${isVisible ? "show" : "hidden"}`}
    >
      <div className="usluge">
        <h1 className="services-title">Naše usluge</h1>
        <p className="services-about">
          Kvalitetna štampa za svaku potrebu – od ideje do gotovog proizvoda.
        </p>
      </div>

      <div className="services-list">
        <div className="services-lists">
          <div className="services-properties">
            <FiPrinter className="services-icon" />
            Digitalna štampa
          </div>
          <div className="services-properties">
            <HiOutlineNewspaper className="services-icon" />
            Ofset štampa
          </div>
          <div className="services-properties">
            <PiTShirtBold className="services-icon" />
            Štampa na majicama
          </div>
        </div>

        <div className="services-lists">
          <div className="services-properties">
            <BsCardText className="services-icon" />
            Štampa vizitkartica
          </div>
          <div className="services-properties">
            <FaBoxOpen className="services-icon" />
            Štampa na kutijama
          </div>
          <div className="services-properties">
            <PiNewspaperClipping className="services-icon" />
            Štampa na PVC foliji
          </div>
        </div>

        <div className="services-lists">
          <div className="services-properties">
            <FaCarAlt className="services-icon" />
            Brendiranje vozila
          </div>
          <div className="services-properties">
            <LuHouse className="services-icon" />
            Brendiranje objekata
          </div>
          <div className="services-properties">
            <HiDotsHorizontal className="services-icon" />
            I još mnogo toga...
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
