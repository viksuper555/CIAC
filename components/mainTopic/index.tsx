import Image from "next/image";
import styles from "./policy.module.scss"
import React from "react";
import RedirectButton from "@/components/ui/readMoreBtn";

interface Props {
    titleImage?: any
    hasTitleImage: boolean;
    hasButton: boolean;
    titleText?: string;
    mainText: string;
    background: string
    downRightImage?: any;
    className?: string
}

const MainTopic = ({
    hasButton, hasTitleImage, titleText, mainText, background, titleImage,
    downRightImage, className
}: Props) => {

    return (
        <>
            <div className={`${styles.policyContainer} ${background} ${className}`}>
                <div className={styles.titleContainer}>
                    {
                        hasTitleImage && <Image src={titleImage} alt={"commaImg"} className="mt-6"/>
                    }
                    <span className={`${styles.titleText} ${!hasTitleImage ? "pl-20 pt-12 relative" : ""}`}>
                        {titleText}
                    </span>
                </div>

                <div className={styles.mainTextContainer}>
                    <div className={styles.mainText}>
                        {mainText}
                    </div>
                    {hasButton && <RedirectButton/>}
                </div>
                <div className={styles.bottomRightImage}>
                    <Image src={downRightImage} alt={"img"} className={styles.bottomRightImage} height={300} width={500}/>
                </div>
            </div>
        </>
    )
}

export default MainTopic