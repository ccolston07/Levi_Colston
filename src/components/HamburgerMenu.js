import React from "react";
import "../stylesheets/Menu.css"
import pdf from "../resources/Resume.pdf"

function HamburgerMenu ({ menuOpen }) {

    return (
        <>
            <div id="menu" className={menuOpen ? "show" : "hide"}>
                <a className="a" href={pdf} download="Resume.pdf">Download Resume</a>
                <a className="a" href="https://www.linkedin.com/in/levi-colston/" target="_blank" rel="noreferrer">LinkedIn</a>
                <a className="a" href="">About</a>
            </div>
        </>
    );
}

export default HamburgerMenu;