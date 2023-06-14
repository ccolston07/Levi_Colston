import React from "react";
import styles from "../stylesheets/ButtonBar.module.css";

function ButtonBar(props) {

    return (
        <div className={styles.div}>
            {
                props.buttonNames.map((buttonName) => 
                    <button id={buttonName+"Button"} className={styles.button}>{buttonName}</button>
                )
            }
        </div>
    );
}

export default ButtonBar;