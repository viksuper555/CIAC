import {getTexts} from "@/contexts/LanguageContext";
import styles from "@/pages/goals/goals.module.scss";
import LargeTextContainer from "@/components/ui/largeTextContainer";

const ExpectedResults = () => {
    const {texts: {expectedResults: texts}} = getTexts();

    return (
        <div className={styles.sectionContainer}>
            <div className={styles.aboutProject}>
                {texts.title}
            </div>
            <LargeTextContainer text={texts.content} imgSrc={'./img/expectedResults.png'}/>
        </div>
    )
}

export default ExpectedResults