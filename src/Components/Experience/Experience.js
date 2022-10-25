import React from "react";
import styles from "./Experience.css";
import thumbnail from "../../images/rover_thumbnail.jpg";

function Experience(){
    return(
        <section className="Experience" id = "Experience">
            <div className="Experience__text-box">
                <h1 className="heading-primary">
                    <span className="heading-primary--main">Experience</span>
                </h1>
                <p> During 2022 edition of NASA’s Human Rover Exploration Challenge is an international competition where
the main task is building from scratch a manned Rover, had the key role of coding sensors, establishing
communication between the vehicle telemetry and the web page where anyone could check for the stats of
the pilots, and designing tools using SolidWorks for sample retrieval. This helped me communicate and
reinforce my teamwork abilities, which gave us as a team the first-place Overall winner category</p>
                <img src={thumbnail} className="Experience__img"></img>
            </div>
        </section>

    );
}

export default Experience;