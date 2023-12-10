import styles from "./aboutProject.module.scss"
import LargeTextContainer from "@/components/ui/largeTextContainer";
import {getTexts} from "@/contexts/LanguageContext";
import "../../app/globals.scss";
import Navbar from "@/components/navbar";
import Resume from "@/pages/resume";
import Goals from "@/pages/goals";
import Groups from "@/pages/groups";
import ExpectedResults from "@/pages/expectedResults";
import Partnership from "@/pages/partnership";

const AboutProject = () => {
    const {texts: {aboutProject: texts}} = getTexts();

    return (
        <>
            <Navbar/>
            <div className={styles.sectionContainer}>
                <div className={styles.aboutProject}>
                    {texts.title}
                </div>
                <div className={styles.container}>
                    <div className={styles.textContainer}>
                        {texts.content}
                    </div>
                    <div className={styles.imgContainer}>
                        <img src={'./img/aboutProject.png'}/>
                    </div>
                </div>
                <div className={styles.textContainer2}>
                    {texts.content2}
                </div>
            </div>
            <Resume/>
            <Goals/>
            <Groups/>
            <ExpectedResults/>
            <Partnership/>
        </>
    )
}

export default AboutProject;