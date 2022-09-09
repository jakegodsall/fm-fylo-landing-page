import React from "react";

import "./MainSection.css";
import "../TestemonialCard/TestemonialCard";
import TestemonialCard from "../TestemonialCard/TestemonialCard";

const MainSection = (props) => {
    return (
        <div className='main-section__container'>
            <h1 className='main-section__title'>
                Stay productive, wherever you are
            </h1>
            <p>
                Never let location be an issue when accessing your files. Fylo
                has you covered for all your file storage needs.
            </p>
            <p>
                Securely share files and folders with friends, family and
                colleagues for live collaboration. No email attachments
                required.
            </p>
            <TestemonialCard />
        </div>
    );
};

export default MainSection;
