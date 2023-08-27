import styles from './startingModule.module.scss'
import CommaImage from '../../public/bulgaria/CommaImage.png';
import WhiteCircle from "../../public/bulgaria/WhiteCircle.png";
import girl2 from "../../public/bulgaria/startingModuleGirl2.png"
import Image from "next/image";
import React from "react";
import girl1 from "../../public/bulgaria/human2.png"

interface Props {
    moduleBackgroundColor: any;
    whiteCircle?: string
    commaImage?: string
    moduleText?: string
}

const StartingModule = ({ moduleBackgroundColor, whiteCircle, commaImage, moduleText }: Props) => {

    return (
        <>
            <div className={`${styles.startingModuleBackground} ${moduleBackgroundColor}`}>
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