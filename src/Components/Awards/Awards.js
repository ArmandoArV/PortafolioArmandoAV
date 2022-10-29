import React from "react";
import styles from "./Awards.css";
import thumbnail from "../../images/rover_thumbnail.jpg";
import RoverChallenge from "../RoverChallenge/RoverChallenge";
import CienciasTec from "../CienciasTec/CienciasTec";
function Awards(){
    return(
        <section className="Awards" id = "Awards">
            <div className="Awards__text-box">
                <h1 className="heading-primary">
                    <span className="heading-primary--main">Awards</span>
                </h1>
            </div>
            <div className="AwardsBox">
                    <RoverChallenge />
                    <CienciasTec />
            </div>  
        </section>

    );
}

export default Awards;  