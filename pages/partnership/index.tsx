import {getTexts} from "@/contexts/LanguageContext";
import styles from './partnership.module.scss'
import "../../app/globals.scss";
import React from "react";


const Partnership = () => {
    const {texts: {partnership: texts}} = getTexts();

    const handleOpenNewWindow = (link: string) => {
        // Open a new window and set its location to the specified URL
        const newWindow = window.open(link, '_blank');

        // Optional: Focus the new window
        if (newWindow) {
            newWindow.focus();
        }
    };

    return (
        <div className={styles.sectionContainer}>
            <div className={styles.partnership}>
                {texts.title}
            </div>
            <div className={""}>
                <div className={styles.partnerTitle}>
                    {texts.partner1}
                </div>
                <div className={styles.partnerText}>
                    {texts.content1}
                </div>
            </div>
            <div className={""}>
                <div className={styles.partnerTitle}>
                    {texts.partner2}
                </div>
                <div className={styles.partnerText}>
                    {texts.content2}
                </div>
            </div>
            <div className={""}>
                <div className={styles.partnerTitle}>
                    {texts.partner3}
                </div>
                <div className={styles.partnerText}>
                    {texts.content3}
                </div>
            </div>
            <div className={styles.partnerBoxContainer}>
                <div className={styles.handbookContainer}>
                    <img src={'./img/organizationOmega.png'} width={400}/>
                    <div className={styles.organizationMail}>
                        <p className={styles.p}>
                            {texts.partner1_info}
                            ngo.omega@gmail.com
                        </p>
                    </div>
                    <div className={styles.downloadContainer} onClick={() => handleOpenNewWindow("https://www.omega-ngo.bg")}>
                        <p className={styles.downloadText}>{texts.button_text}</p>
                    </div>
                </div>
                <div className={styles.handbookContainer}>
                    <img src={'./img/fondaciqKorenyak.png'} width={400}/>
                    <div className={styles.organizationMail}>
                        <p className={styles.p}>
                            {texts.partner2_info}
                            foundation.korenyak@gmail.com
                        </p>
                    </div>
                    <div className={styles.downloadContainer} onClick={() => handleOpenNewWindow("https://www.korenyakproject.org")}>
                        <p className={styles.downloadText}>{texts.button_text}</p>
                    </div>
                </div>
                <div className={styles.handbookContainer}>
                    <img src={'./img/drpd.png'} width={400}/>
                    <div className={styles.organizationMail}>
                        <p className={styles.p}>
                            {texts.partner3_info}
                            info@drpdnm.org
                        </p>
                    </div>
                    <a className={styles.downloadContainer} href={"https://www.nevladnik.info"} target={"_blank"}>
                        <p className={styles.downloadText}>{texts.button_text}</p>
                    </a>
                </div>
            </div>



        </div>
    )
}

export default Partnership