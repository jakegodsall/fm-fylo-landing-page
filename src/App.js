import React from "react";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";

import "./App.css";

const App = () => {
    return (
        <div className='main-container'>
            <Navbar />
            <Hero />
        </div>
    );
};

export default App;
