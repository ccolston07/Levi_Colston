import React, { useState } from "react";
import styles from "../stylesheets/Header.module.css"
import BottomInfoBar from "./BottomInfoBar";
import Hamburger from "./Hamburger";
import HamburgerMenu from "./HamburgerMenu";

function Header(props) {
    const [menuOpen, toggleMenuOpen] = useState(false);

    return (
        <>
            <div className={styles.div}>
                <h1 className={styles.h1Start}>LC</h1>
                <h1 className={styles.h1}>|</h1>
                <h1 className={styles.h1}>{props.headerTitle}</h1>
                <Hamburger menuOpen={menuOpen} toggleMenuOpen={toggleMenuOpen}/>
                <BottomInfoBar />
            </div>
            <HamburgerMenu menuOpen={menuOpen}/>
        </>
    );
}

export default Header;