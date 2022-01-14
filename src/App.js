import React from "react";
import Header from "./Pages/Header/Header";
import background from "./img/Header-Bg.jpg";
import logo from "./img/Main-Logo.png";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Works from "./Pages/Works/Works";
import './App.css';
import MostServices from "./Pages/MostServices/MostServices";
import Team from "./Pages/Team/Team";
import Testimonial from "./Pages/Testimonial/Testimonial";
import Clients from "./Pages/Clients/Clients";
import Footer from "./Pages/Footer/Footer";

function App() {
  return (
      <>
          <Header background={background} logo={logo}/>
          <AboutUs />
          <Works />
          <MostServices />
          <Team />
          <Testimonial />
          <Clients />
          <Footer />
      </>
  );
}

export default App;
