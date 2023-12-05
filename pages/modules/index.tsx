import "../../app/globals.scss";
import styles from './modules.module.scss'
import {getTexts} from "@/contexts/LanguageContext";

const Modules = () => {
    const {texts: {Bulgaria: texts}, locale} = getTexts();


    return (
        <div className={styles.container}>
            <a className={styles.box} href={'/'}><img src={`/img/bulgModule-${locale}.png`}/></a>
            <a className={styles.box} href={'/europe'}><img src={`/img/euModules-${locale}.png`}/></a>
            <a className={styles.box} href={'/slovenia'}><img src={`/img/sloModule-${locale}.png`}/></a>
            <a className={styles.box} href={'westernBalkans'}><img src={`/img/wbModules-${locale}.png`}/></a>
        </div>
    )
}

export default Modules