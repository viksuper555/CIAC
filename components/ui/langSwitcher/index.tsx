import styles from './langSwitcher.module.scss'
import React from "react";
import {getTexts} from "@/contexts/LanguageContext";
const LangSwitcher = () => {
    const { changeLanguage } = getTexts();

    return (
        <div className={styles.container}>
        <img src={'./img/langIcon.svg'}/>
            <div className={styles.language}>
                <li onClick={() => changeLanguage("eng")}> English</li>
                <li onClick={() => changeLanguage("bg")}>Bulgarian</li>
                <li onClick={() => changeLanguage("slo")}>Slovenian</li>
            </div>
        </div>
    )
}

export default LangSwitcher