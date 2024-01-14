"use client"
import React, { useEffect } from "react";

interface CalendlyProps {
    url: string;
}

const Calendly: React.FC<CalendlyProps> = ({ url }) => {
    useEffect(() => {
        const head = document.querySelector("head");
        const script = document.createElement("script");
        script.setAttribute(
            "src",
            "https://assets.calendly.com/assets/external/widget.js"
        );
        head?.appendChild(script);

        return () => {
            head?.removeChild(script);
        };
    }, []);

    return (
        <div
            className="calendly-inline-widget"
            data-url={url}
            style={{ minHeight: "850px", width: "100%" }}
        ></div>
    );
};

export default Calendly;
