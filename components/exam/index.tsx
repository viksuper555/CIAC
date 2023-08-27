import styles from "./exam.module.scss";
import Image from "next/image";
import React from "react";
import RedirectButton from "@/components/ui/readMoreBtn";
import examW1 from "@/public/bulgaria/examW1.png"
import examW2 from "@/public/bulgaria/examW2.png"

interface Props {
    titleImage: any,
    background: any,
    image?: any
}
const Exam = ({titleImage, background}: Props) => {

    return (
            <div className={`${styles.examContainer} ${background}`}>
                <div className={styles.titleContainer}>
                    <Image src={titleImage} alt={"commaImg"} className="mt-6"/>
                    <span className={`${styles.titleText}`}>
                        "Тест"
                    </span>
                </div>
            <div className={"flex justify-center mt-20"}>
                <RedirectButton btnText={"Започни"}/>
            </div>
            <div className={styles.bottomRightImage}>
                <Image src={examW1} alt={"img"} className={styles.bottomRightImage} height={200} width={100}/>
                <Image src={examW2} alt={"img"} className={styles.bottomRightImage} height={200} width={100}/>
            </div>
        </div>
    )
}

export default Exam