import styles from './materials.module.scss'
import "../../app/globals.scss";
import {getTexts} from "@/contexts/LanguageContext";
import parse from "html-react-parser";
const Materials = () => {
    const { texts: {materials: texts} } = getTexts();
    var parse = require('html-react-parser');


    return (
        <div className={styles.sectionContainer}>
            <div className={styles.moreMaterials}>
                {texts.topicTitle}
            </div>
            <div>
                <div className={styles.textContainer}>
                    {parse(texts.mainText)}
                </div>
            </div>

            <div className={styles.moreMaterials}>
                {texts.materials}
            </div>
            <div className={styles.columnContainers}>
                <div className={styles.firstCol}>
                    <div className={styles.container}>
                        <p className={styles.number}>
                            1.
                        </p>
                        <div className={styles.text}>
                            {texts.text1}
                        </div>
                    </div>
                    <div className={styles.container}>
                        <p className={styles.number}>
                            2.
                        </p>
                        <div className={styles.text}>
                            {texts.text2}
                        </div>
                    </div>
                    <div className={styles.container}>
                        <p className={styles.number}>
                            3.
                        </p>
                        <div className={styles.text}>
                            {texts.text3}
                        </div>
                    </div>
                </div>

                <div className={styles.secondCol}>
                    <div className={styles.container}>
                        <p className={styles.number}>
                            4.
                        </p>
                        <div className={styles.text}>
                            {texts.text4}
                        </div>
                    </div>
                    <div className={styles.container}>
                        <p className={styles.number}>
                            5.
                        </p>
                        <div className={styles.text}>
                            {texts.text5}
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className={styles.textContainer}>
                    {parse(texts.mainText2)}
                </div>
            </div>

            <div className={styles.moreMaterials}>
                {texts.materials}
            </div>
            <div className={styles.columnContainers}>
                <div className={styles.firstCol}>
                    <div className={styles.container}>
                        <p className={styles.number}>
                            1.
                        </p>
                        <div className={styles.text}>
                            {texts.text6}
                        </div>
                    </div>
                    <div className={styles.container}>
                        <p className={styles.number}>
                            2.
                        </p>
                        <div className={styles.text}>
                            {texts.text7}
                        </div>
                    </div>
                    <div className={styles.container}>
                        <p className={styles.number}>
                            3.
                        </p>
                        <div className={styles.text}>
                            {texts.text8}
                        </div>
                    </div>
                    <div className={styles.container}>
                        <div className={styles.container}>
                            <p className={styles.number}>
                                4.
                            </p>
                            <div className={styles.text}>
                                {texts.text9}
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.secondCol}>
                    <div className={styles.container}>
                        <p className={styles.number}>
                            5.
                        </p>
                        <div className={styles.text}>
                            {texts.text10}
                        </div>
                    </div>
                    <div className={styles.container}>
                        <p className={styles.number}>
                            6.
                        </p>
                        <div className={styles.text}>
                            {texts.text11}
                        </div>
                    </div>
                    <div className={styles.container}>
                        <p className={styles.number}>
                            7.
                        </p>
                        <div className={styles.text}>
                            {texts.text12}
                        </div>
                    </div>
                    <div className={styles.container}>
                        <p className={styles.number}>
                            8.
                        </p>
                        <div className={styles.text}>
                            {texts.text13}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Materials