import styles from "./exam.module.scss";
import Image from "next/image";
import React from "react";
import RedirectButton from "@/components/ui/readMoreBtn";
import examW1 from "@/public/img/bulgaria/examW1.png"
import examW2 from "@/public/img/bulgaria/examW2.png"

interface Props {
    titleImage: any,
    background: any,
    image?: any
    className?: string
    id?: string
    scribbleImg?: string;
    scribbleImgClass?: string;
    btnClass?: string;
    titleClass?: string;
}
const Exam = ({
    titleImage, background, className, id, scribbleImg,
    scribbleImgClass, btnClass, titleClass
}: Props) => {

    return (
            <div id={id} className={`${styles.examContainer} ${background} ${className}`}>
                <div className={styles.titleContainer}>
                    <Image src={titleImage} alt={"commaImg"} className="mt-6"/>
                    <span className={`${styles.titleText} ${titleClass}`}>
                        Тест
                    </span>
                </div>
            <div className={styles.actionBtnContainer}>
                <div className={styles.actionBtnInner}>
                    <div className={`${styles.actionBtn} ${btnClass}`}>
                        Изтегли
                    </div>
                    <img src={scribbleImg ?? '/img/scribble.svg'} className={`${styles.scribble} ${scribbleImgClass}`}/>
                </div>
            </div>
            <img src={'/img/europe/girls.png'} className={styles.bottomRightImage}/>
        </div>
    )
}

export default Exam