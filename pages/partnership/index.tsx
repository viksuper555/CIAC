import {getTexts} from "@/contexts/LanguageContext";
import styles from "@/pages/goals/goals.module.scss";
import LargeTextContainer from "@/components/ui/largeTextContainer";

const Partnership = () => {
    const {texts: {partnership: texts}} = getTexts();

    return (
        <div className={styles.sectionContainer}>
            <div className={styles.aboutProject}>
                {texts.title}
            </div>
            <LargeTextContainer text={texts.content} imgSrc={'./img/partnership.png'}/>
        </div>
    )
}

export default Partnership