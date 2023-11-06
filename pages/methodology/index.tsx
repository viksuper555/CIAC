import styles from './methodology.module.scss'
import LargeTextContainer from "@/components/ui/largeTextContainer";
import {getTexts} from "@/contexts/LanguageContext";
import "../../app/globals.scss";

const Methodology = () => {
    const {texts: {handbook: texts}} = getTexts();

    return (
        <div className={styles.sectionContainer}>
            <div className={styles.handbookContainer}>
                <img src={'./img/handbook.png'} width={400}/>
                <div className={styles.downloadContainer}>
                    <p className={styles.downloadText}>{texts.download}</p>
                </div>
            </div>
            <div className={styles.textContainer}>
                {texts.description}
            </div>
        </div>
    )
}

export default Methodology