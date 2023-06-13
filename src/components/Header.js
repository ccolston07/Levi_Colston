import React from "react";
import styles from "../stylesheets/Header.module.css"

function Header(props) {

    return (
        <div>
            <h1 className={styles.h1Start}>LC</h1>
            <h1 className={styles.h1}>|</h1>
            <h1 className={styles.h1}>{props.headerTitle}</h1>
            <hr className={styles.hr} />
        </div>
    );
}

export default Header;