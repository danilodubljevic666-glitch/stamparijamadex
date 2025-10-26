import { GiBackwardTime } from "react-icons/gi";
import { FiTarget } from "react-icons/fi";
import { FaEye } from "react-icons/fa";

import { useEffect, useRef, useState } from "react";
import './Future.css';

function Future() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      setVisible(entry.isIntersecting); // svaki put kad uđe ili izađe
    },
    { threshold: 0.2 }
  );

  if (ref.current) observer.observe(ref.current);

  return () => {
    if (ref.current) observer.unobserve(ref.current);
    observer.disconnect();
  };
}, []);


  return (
    <div className="future-container" ref={ref}>
      <div className={`section-one fade-in ${visible ? "visible" : ""}`}>
        <GiBackwardTime className="time-back"/>
        <h1>Naša priča</h1>
        <p>Štamparija Madex je porodična firma koja traje više od 20 godina. <br/>Kroz predan rad, stalno ulaganje u kvalitet i povjerenje naših klijenata, izrasli smo u štampariju na koju se možete osloniti.</p>
      </div>
      <div className={`section-two fade-in ${visible ? "visible" : ""}`}>
        <FiTarget className="target"/>
        <h1>Naša misija</h1>
        <p>Naša misija je da svakom klijentu obezbedimo štampu vrhunskog kvaliteta, uz pouzdanu uslugu i doslednu posvećenost detaljima. Vjerujemo da dobra štampa nije samo posao, već način da se ideje pretvore u stvarnost.</p>
      </div>
      <div className={`section-three fade-in ${visible ? "visible" : ""}`}>
        <FaEye className="vision"/>
        <h1>Naša vizija</h1>
        <p>Naša vizija je da ostavimo trajan trag u svijetu vizuelne komunikacije, stvarajući rješenja koja povezuju brendove sa ljudima. Vjerujemo u štampu koja ima svrhu i priču.</p>
      </div>
    </div>
  );
}

export default Future;
