import styles from "./exam.module.scss";
import Image from "next/image";
import React from "react";
import ReadMoreBtn from "@/components/ui/readMoreBtn";

interface Props {
    titleImage: any
}
const Exam = ({titleImage}: Props) => {

    return (
        <div className={styles.examContainer}>
            <div className={styles.titleContainer}>
                <Image src={titleImage} alt={"commaImg"} className="mt-6"/>
                <span className={`${styles.titleText}`}>
                    "Тест"
                </span>
            </div>
            <div className={"flex justify-center"}>
                <ReadMoreBtn/>
            </div>
        </div>
    )
}

export default Exam