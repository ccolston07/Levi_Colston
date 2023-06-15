import React from "react";
import styles from "../stylesheets/ContentCard.module.css"

function ContentCard ({name, open, setOpen }) {

    return (
        <div className={styles.card} onClick={() => {setOpen(!open)}} >
            {name}
        </div>
    );
}

export default ContentCard;