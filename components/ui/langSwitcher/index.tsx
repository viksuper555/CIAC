import styles from './langSwitcher.module.scss'
import React from "react";
import {getTexts} from "@/contexts/LanguageContext";
const LangSwitcher = () => {
    const { changeLanguage } = getTexts();

    return (
        <div className={styles.container}>
        <img src={'./img/langIcon.svg'}/>
            <div className={styles.language}>
                <li className={styles.item} onClick={() => changeLanguage("eng")}> English</li>
                <li className={styles.item} onClick={() => changeLanguage("bg")}>Bulgarian</li>
                <li className={styles.item} onClick={() => changeLanguage("slo")}>Slovenian</li>
            </div>
        </div>
    )
}

export default LangSwitcher