import { useRef } from "react";
import Nav from "./Nav.jsx";
import ImageSlider from "./ImageSlider.jsx";
import HeroSection from "./HeroSection.jsx";
import WelcomeSection from "./WelcomeSection.jsx";
import Future from "./Future.jsx";
import Services from "./Services.jsx";
import Statistics from "./Statistics.jsx";
import Portfolio from "./Portfolio.jsx";
import Location from "./Location.jsx";
import Contact from "./Contact.jsx";
function App() {
  const servicesRef = useRef(null); // 🔹 ref za Services
  const aboutRef = useRef(null);
  const contactRef=useRef(null);
  const homeref=useRef(null);  // 🔹 ref za O nama (WelcomeSection)

  return (
    <>
      {/* Prosleđujemo oba ref-a u Nav */}
      <Nav servicesRef={servicesRef} aboutRef={aboutRef} contactRef={contactRef} homeref={homeref}/>

<div ref={homeref}>
      <HeroSection />
</div>
      {/* Ref stavljamo na WelcomeSection */}
      <div ref={aboutRef}>
        <WelcomeSection servicesRef={servicesRef} />
      </div>

      <Future />

      {/* Ref za Services */}
      <div ref={servicesRef}>
        <Services />
      </div>
<ImageSlider/>
      <Statistics/>
      <Portfolio/>
      <div ref={contactRef}>
      <Location/>
      </div>
      <Contact/>
    </>
  );
}

export default App;
