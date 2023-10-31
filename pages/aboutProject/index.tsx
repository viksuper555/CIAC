import styles from "./aboutProject.module.scss"
import LargeTextContainer from "@/components/ui/largeTextContainer";
import {getTexts} from "@/contexts/LanguageContext";

const AboutProject = () => {
    const {texts: {aboutProject: texts}} = getTexts();

    return (
        <div className={styles.sectionContainer}>
            <div className={styles.aboutProject}>
                {texts.title}
            </div>
            <LargeTextContainer text={texts.content} imgSrc={'./img/aboutProject.png'}/>
        </div>
    )
}

export default AboutProject