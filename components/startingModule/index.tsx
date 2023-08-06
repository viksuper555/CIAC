import styles from './startingModule.module.scss'
import CommaImage from '../../public/CommaImage.png';
import WhiteCircle from "../../public/WhiteCircle.png";
import girl2 from "../../public/startingModuleGirl2.png"
import Image from "next/image";
import React from "react";
import girl1 from "../../public/human2.png"

interface Props {
    whiteCircle?: string
    commaImage?: string
    moduleText?: string
}

const StartingModule = ({ whiteCircle, commaImage, moduleText }: Props) => {

    return (
        <>
            <div className={styles.startingModuleBackground}>
                <div className={styles.moduleContainer}>
                    <div className={styles.circleContainer}>
                        <Image src={WhiteCircle} alt={"whiteCircle"} className={styles.circle}/>
                        <div className={styles.commaContainer}>
                            <Image src={CommaImage} alt={"commaImg"} className={styles.commaImage}/>
                            <Image src={CommaImage} alt={"commaImg"} className={styles.commaImage}/>
                        </div>
                    </div>
                    <div className={styles.textContainer}>
                        <span className={styles.textStyle}>
                            {moduleText}
                        </span>
                    </div>
                </div>
                <div className={styles.peopleImagesContainer}>
                    <Image src={girl1} alt={"girl2"} height={150} width={300}/>
                    <Image src={girl2} alt={"girl2"} height={200} width={300}/>
                </div>
            </div>
        </>
    )
}

export default StartingModule