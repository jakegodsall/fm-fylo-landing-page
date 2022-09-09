import React from "react";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";

import "./App.css";
import MainSection from "./components/MainSection/MainSection";

const App = () => {
    return (
        <div className='main-container'>
            <Navbar />
            <Hero />
            <MainSection />
        </div>
    );
};

export default App;
