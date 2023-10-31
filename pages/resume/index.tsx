import styles from "./resume.module.scss"
import LargeTextContainer from "@/components/ui/largeTextContainer";
import {getTexts} from "@/contexts/LanguageContext";

const Resume = () => {
    const {texts: {resume: texts}} = getTexts();

    return (
        <div className={styles.sectionContainer}>
            <div className={styles.aboutProject}>
                {texts.title}
            </div>
            <LargeTextContainer text={texts.content} imgSrc={'./img/resume.png'}/>
        </div>
    )
}

export default Resume