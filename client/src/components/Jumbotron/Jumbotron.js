import React from "react";
import "./Jumbotron.css";

const Jumbotron = ({ children }) => (
    <div
        className="jumbotron"
        style={{ clear: "both", margin: 50, textAlign: "center"}}
        >
        {children}
        </div>
);
export default Jumbotron;