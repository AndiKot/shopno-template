import React from "react";
import { Routes, Route } from 'react-router-dom';
import Header from "./Pages/Header";
import AboutUs from "./Pages/AboutUs";
import Works from "./Pages/Works";
import MostServices from "./Pages/MostServices";
import Team from "./Pages/Team";
import Testimonial from "./Pages/Testimonial";
import Clients from "./Pages/Clients";
import Footer from "./Pages/Footer";
import MainContent from "./Components/MainContent";

import background from "./img/Header-Bg.jpg";

function App() {
    return (
        <MainContent>
            <Routes>
                <Route path="/" element={<Header background={background} />}/>
                <Route path='/about' element={<AboutUs/>}/>
                <Route path="/works" element={<Works/>}/>
                <Route path="/services" element={<MostServices/>}/>
                <Route path="/team" element={<Team/>}/>
                <Route path="/testimonials" element={<Testimonial/>}/>
                <Route path="/clients" element={<Clients/>}/>
                <Route path="/contacts" element={<Footer/>}/>
            </Routes>
        </MainContent>
);
}

export default App;
