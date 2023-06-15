import React, { useState } from "react";
import styles from "../stylesheets/ContentBar.module.css";
import ContentCard from "./ContentCard";
import "../stylesheets/DropMenu.css";

function ContentBar() {
    const [isExpDropMenuOpen, setIsExpDropMenuOpen] = useState(false);
    const [isProjDropMenuOpen, setIsProjDropMenuOpen] = useState(false);
    const [isEduDropMenuOpen, setIsEduDropMenuOpen] = useState(false);
    const [isIntDropMenuOpen, setIsIntDropMenuOpen] = useState(false);

    return (
        <div className={styles.cardBar}>
            <div>
                <ContentCard name="Experience" open={isExpDropMenuOpen} setOpen={setIsExpDropMenuOpen}/>
                <div id="dropMenu" className={"Experience" + (isExpDropMenuOpen ? "Show" : "Hidden")}>
                    <ul className={styles.ul}>
                        <li>Code Wiz</li>
                        <li>Publicis Sapient</li>
                        <li>The Fresh Food Group</li>
                    </ul>
                </div>
            </div>
            <div>
                <ContentCard name="Projects" open={isProjDropMenuOpen} setOpen={setIsProjDropMenuOpen}/>
                <div id="dropMenu" className={"Projects" + (isProjDropMenuOpen ? "Show" : "Hidden")}>
                    <ul className={styles.ul}>
                        <li>SadieBot</li>
                        <li>GT Escpae</li>
                        <li>E2E Encrypted Messenger</li>
                        <li>Personal Website</li>
                    </ul>
                </div>
            </div>
            <div>
                <ContentCard name="Education" open={isEduDropMenuOpen} setOpen={setIsEduDropMenuOpen}/>
                <div id="dropMenu" className={"Education" + (isEduDropMenuOpen ? "Show" : "Hidden")}>
                    <ul className={styles.ul}>
                        <li>Georgia Institute of Technology</li>
                    </ul>
                </div>
            </div>
            <div>
                <ContentCard name="Interests" open={isIntDropMenuOpen} setOpen={setIsIntDropMenuOpen}/>
                <div id="dropMenu" className={"Interests" + (isIntDropMenuOpen ? "Show" : "Hidden")}>
                    <ul className={styles.ul}>
                        <li>Video Game Development and Design</li>
                        <li>Sports Analytics</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ContentBar;