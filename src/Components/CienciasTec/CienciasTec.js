import React from "react";
import styles from "./CienciasTec.css";
import thumbnail from "../../images/ITESM.png";

function CienciasTec(){
    return(
        <div className="CienciasTec">
            <div className = "CienciasTec_Img">
                <img src={thumbnail} alt="Rover Challenge" />
            </div>
            <div className="CienciasTec__text-box">
                <h1 className="heading-primary">
                    <span className="heading-primary--main">Participation</span>
                </h1>
                <h2 className="heading-secondary">
                    <span className="heading-secondary--sub">“International Contest of Science by Tecnológico de Monterrey” [2021]</span>
                </h2>
            </div>
        </div>
    );
}

export default CienciasTec;