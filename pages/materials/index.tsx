import styles from './materials.module.scss'
import "../../app/globals.scss";
const Materials = () => {
    return (
        <div className={styles.sectionContainer}>
            <div className={styles.moreMaterials}>
                Още Материали:
            </div>
            <div className={styles.columnContainers}>
                <div className={styles.firstCol}>
                    <div className={styles.container}>
                        <p className={styles.number}>
                            1.
                        </p>
                        <div className={styles.text}>
                            Анкета CIAC
                        </div>
                    </div>
                    <div className={styles.container}>
                        <p className={styles.number}>
                            2.
                        </p>
                        <div className={styles.text}>
                            Доклад проучване Кореняк
                        </div>
                    </div>
                    <div className={styles.container}>
                        <p className={styles.number}>
                            3.
                        </p>
                        <div className={styles.text}>
                            Доклад проучване Омега
                        </div>
                    </div>
                    <div className={styles.container}>
                        <p className={styles.number}>
                            4.
                        </p>
                        <div className={styles.text}>
                            Национален доклад ИП1
                        </div>
                    </div>
                </div>

                <div className={styles.secondCol}>
                    <div className={styles.container}>
                        <p className={styles.number}>
                            5.
                        </p>
                        <div className={styles.text}>
                            CIAC-Research Report Korenyak
                        </div>
                    </div>
                    <div className={styles.container}>
                        <p className={styles.number}>
                            6.
                        </p>
                        <div className={styles.text}>
                            CIAC-Research_Report Omega
                        </div>
                    </div>
                    <div className={styles.container}>
                        <p className={styles.number}>
                            7.
                        </p>
                        <div className={styles.text}>
                            IO1_National-analisys_YOUTH-ENGAGEMENT Eng
                        </div>
                    </div>
                    <div className={styles.container}>
                        <p className={styles.number}>
                            8.
                        </p>
                        <div className={styles.text}>
                            Survey Questionnaire CIAC
                        </div>
                    </div>
                </div>

                <div className={styles.secondCol}>
                    <div className={styles.container}>
                        <p className={styles.number}>
                            9.
                        </p>
                        <div className={styles.text}>
                            m-VPRASALNIK-CIAC
                        </div>
                    </div>
                    <div className={styles.container}>
                        <p className={styles.number}>
                            10.
                        </p>
                        <div className={styles.text}>
                            M-CIAC-Research_Report_Omega
                        </div>
                    </div>
                    <div className={styles.container}>
                        <p className={styles.number}>
                            11.
                        </p>
                        <div className={styles.text}>
                            m-RESEARCH-REPORT-ON-YOUTH-ATTITUDES-TOWARDS-CITIZENSHIP_EU_Korenyak
                        </div>
                    </div>
                    <div className={styles.container}>
                        <p className={styles.number}>
                            12.
                        </p>
                        <div className={styles.text}>
                            M-IO1_National-analisys_YOUTH-ENGAGEMENT-Sl
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Materials