import Image from "next/image";
import greenTitleCircle from "../../public/greenTitleCircle.png";
import styles from "./policy.module.scss"
import React from "react";

const Policy = () => {

    return (
        <>
            <div className={styles.policyContainer}>
                <div className={styles.titleContainer}>
                    <Image src={greenTitleCircle} alt={"commaImg"} className="mt-6"/>
                    <span className={styles.titleText}>
                        Политика
                    </span>
                </div>

                <div className={styles.mainTextContainer}>
                    <div className={styles.mainText}>
                        Политиката на България се основава на няколко ключови принципа и ценности,
                        които определят направлението и приоритетите на държавата.
                        Ето някои от основите за политиката на България.
                    </div>
                </div>
                <div className={styles.bottomRightImage}>
                    <Image src={greenTitleCircle} alt={"img"} className={styles.bottomRightImage}/>
                </div>
            </div>
        </>
    )
}

export default Policy