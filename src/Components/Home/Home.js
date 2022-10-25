import React from "react";
import styles from "./Home.css";
import pfp from "../../images/pfp.jpg";

function Home(){
    return(
        <section className="home"  id = "home">
            <div className="home__text-box">
                <h1 className="heading-primary">
                    <span className="heading-primary--main">Home</span>
                </h1>
                <p> Hello, my name is Armando, I'm currently pursuing a bachelor's in Computer Science at Tecnológico de Monterrey. I'm highly interested in cybersecurity topics, I'm a passionate fan of space.</p>
                <img src={pfp} className="home__img"></img>
            </div>
        </section>

    );
}

export default Home;