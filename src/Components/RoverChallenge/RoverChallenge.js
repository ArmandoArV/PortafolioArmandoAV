import React from "react";
import styles from "./RoverChallenge.css";
import thumbnail from "../../images/NASA_logo.svg.png";

function RoverChallenge(){
    return(
        <div className="RoverChallenge">
            <div className = "RoverChallenge_Img">
                <img src={thumbnail} alt="Rover Challenge" />
            </div>
            <div className="RoverChallenge__text-box">
                <h1 className="heading-primary">
                    <span className="heading-primary--main">1st Place Overall Winner</span>
                </h1>
                <h2 className="heading-secondary">
                    <span className="heading-secondary--sub">NASA Human Exploration Rover Challenge [2022]</span>
                </h2>
            </div>
        </div>
    );
}

export default RoverChallenge;