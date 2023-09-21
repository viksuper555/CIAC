import styles from "./centeredScheme.module.scss";
import Image from "next/image";
import greenTitleCircle from "@/public/img/bulgaria/greenTitleCircle.png";
import React from "react";

interface Props {
    hasTitle?: boolean;
    centerImageSrc: any;
    text: string;
}

const CenteredScheme = ({ hasTitle, centerImageSrc, text }: Props) => {

    return (
        <>
            <div className={`${styles.pageContainer} ${!hasTitle ? "mt-6": ""}`}>
                {
                    hasTitle &&
                    <div className={styles.titleContainer}>
                        <Image src={greenTitleCircle} alt={"commaImg"} className="mt-6"/>
                        <span className={styles.titleText}>
                            Схема
                        </span>
                    </div>
                }
                <div className={styles.schemeContainer}>
                    <Image src={centerImageSrc} alt={"commaImg"} className="mt-6"/>
                </div>
                <div className={styles.bottomText}>
                    {text}
                </div>
            </div>
        </>
    )
}

export default CenteredScheme