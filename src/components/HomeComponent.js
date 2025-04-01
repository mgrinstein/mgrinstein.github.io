import React from "react";
import "./HomeComponent.css";

const HomeComponentText = ({ text }) => {
    const lines = text.split("\n");

    return (
        <div>
            {lines.map((line, index) => (
                <p key={index}>{line}</p>
            ))}
        </div>
    );
};

export function HomeComponent({ title, image }) {
    return (
        <div className="home-component-container">
            <div className="home-component-text">
            {title && <h2>{<h2>&gt; &nbsp;Hello, World!</h2>}</h2>}  
                <HomeComponentText
                    text={`\nI am a Software Engineer specialized in backend services and cloud technologies. Deeply committed to technical excellence and continuous learning.
                        \n Beyond my professional work, I am an active speaker and community builder within the AWS ecosystem. Focus areas include Software Architecture, AI, Infrastructure as Code, and emerging technologies. 
    Interested in broadening my contributions to open-source projects, particularly for Satellite and Space applications.`}
                />
            </div>
            {image && (

            <div className="home-component-photo">
                <img src={image} alt="My Photo" />
            </div>
        )}
        </div>
    );
}
