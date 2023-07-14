import infoContent from "../../public/infoContent.svg"
import Image from "next/image";
import styles from "./contentReview.module.scss"

const ContentReview = () => {

    return (
        <div className={"w-full"}>
            <div className={"flex items-center justify-center pt-10"}>
                <span className={styles.titleContainer}>
                    Съдържание
                </span>
            </div>
            <div className={"ml-40 mb-10"}>
                <Image src={infoContent} alt={"asd"}/>
            </div>
        </div>
    )
}

export default ContentReview