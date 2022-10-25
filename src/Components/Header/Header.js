import React from "react";
import styles from "./Header.css";

function Header(){
    return(
        <header className={styles.header}>
            <div id="header_logo-box">
            </div>
            <div class = "header_nav" id = "myTopnav">
                <a> Home</a>
                <a> Experience</a>
                <a> Awards</a>
                <a> Articles</a>
                <a> Certifications</a>
                <a> Contact</a>
            </div>
        </header>
    );
}

export default Header;