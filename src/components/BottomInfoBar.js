import React from "react";
import styles from "../stylesheets/BottomInfoBar.module.css"
import pdf from "../resources/Resume.pdf"

function BottomInfoBar () {

    const handleAboutClick = () => {
        alert("This is a work in progress!")
    }

    return (
        <div className={styles.divBox}>
            <a className={styles.a} href={pdf} download="Resume.pdf">Download Resume</a>
            <a className={styles.a} href="https://www.linkedin.com/in/levi-colston/" target="_blank">LinkedIn</a>
            <a className={styles.a} onClick={handleAboutClick}>About</a>
        </div>
    );
}

export default BottomInfoBar;