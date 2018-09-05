import React from "react";

export const Container = ({ fluid, children }) => (
    <div className={`container${fluid ? "-fuild": ""}`}>
        {children}
    </div>
);