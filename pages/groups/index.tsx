import {getTexts} from "@/contexts/LanguageContext";
import styles from './groups.module.scss'
import LargeTextContainer from "@/components/ui/largeTextContainer";

const Groups = () => {

    const {texts: {targetGroup: texts}} = getTexts();

    return (
        <div className={styles.sectionContainer}>
            <div className={styles.groups}>
                {texts.title}
            </div>
            <LargeTextContainer text={texts.content} imgSrc={'./img/targetGroups.png'}/>
        </div>
    )
}

export default Groups