import React from "react";
import styles from "../stylesheets/Hamburger.module.css";

function Hamburger ({menuOpen, toggleMenuOpen}) {

    return (
        <>
            <div className={styles.hamburger} onClick={() => {toggleMenuOpen(!menuOpen)}}>
                <div className={styles.burger}></div>
                <div className={styles.burger}></div>
                <div className={styles.burger}></div>
            </div>
        </>
    );
}

export default Hamburger;