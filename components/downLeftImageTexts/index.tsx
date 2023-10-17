import React from "react";
import styles from './downLeftImageTexts.module.scss'
import Image from "next/image";
import parse from "html-react-parser";

interface Props {
    background: any,
    texts?: string[]
    leftImage: any,
    className: string
}

const DownLeftImageTexts = ({background, leftImage, texts, className}: Props) => {

    return (
        <>
            <div className={`${styles.container} ${background} ${className}`}>
                <div className={styles.imageContainer}>
                    <Image src={leftImage} alt={"commaImg"} className="mt-6"/>
                </div>
                { texts != null &&
                <div className={styles.textsContainer}>
                    <div className={styles.text}> {parse(texts[0])}</div>
                    <div className={styles.text}> {parse(texts[1])} </div>
                    <div className={styles.text}> {parse(texts[2])} </div>
                </div>
                }
            </div>

        </>
    )
}

export default DownLeftImageTexts