import React from "react";
import "./AboutMe.css";

export function AboutMe() {
    return (
        <div className="home-component-container">
            <div className="home-component-text">
            <h2>Experience:</h2>
                <ul>
                    <li>Software Engineer at The LEGO Group</li>
                    <li>Software Engineer at Accenture</li>
                    <li>Predictive Analytics Lead at VTEX</li>
                    </ul>
            <h2>Degrees:</h2>
                <ul>
                    <li>MEng in Telecommunications Engineering - IMT Atlantique</li>
                    <li>BEng in Electrical Engineering - Federal University of Rio de Janeiro</li>
                </ul>

                <h2>Cloud Certifications:</h2>
                <ul>
                    <li>AWS Certified Solutions Architect - Associate</li>
                    <li>AWS Certified Developer - Associate</li>
                    <li>AWS Certified Cloud Practitioner</li>
                </ul>

                <h2>Professional Memberships:</h2>
                <ul>
                    <li>Member of the British Computer Society (MBCS)</li>
                    <li>Member of the Institution of Engineering and Technology (MIET)</li>
                </ul>
            </div>
        </div>
    );
}
