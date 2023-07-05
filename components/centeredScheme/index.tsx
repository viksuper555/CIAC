import styles from "./centeredScheme.module.scss";
import Image from "next/image";
import greenTitleCircle from "@/public/greenTitleCircle.png";
import scheme1 from "../../public/scheme1.png"
import React from "react";

const CenteredScheme = () => {

    return (
        <>
            <div className={styles.pageContainer}>
                <div className={styles.titleContainer}>
                    <Image src={greenTitleCircle} alt={"commaImg"} className="mt-6"/>
                    <span className={styles.titleText}>
                        Схема
                    </span>
                </div>
                <div className={styles.schemeContainer}>
                    <Image src={scheme1} alt={"commaImg"} className="mt-6"/>
                </div>
                <div className={styles.bottomText}>
                    Държавно управление на Република България
                </div>
            </div>
        </>
    )
}

export default CenteredScheme