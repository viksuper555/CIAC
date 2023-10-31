import styles from "./goals.module.scss"
import LargeTextContainer from "@/components/ui/largeTextContainer";
import {getTexts} from "@/contexts/LanguageContext";

const Goals = () => {
    const {texts: {goals: texts}} = getTexts();

    return (
        <div className={styles.sectionContainer}>
            <div className={styles.aboutProject}>
                {texts.title}
            </div>
            <LargeTextContainer text={texts.content} imgSrc={'./img/goals.png'}/>
        </div>
    )
}

export default Goals