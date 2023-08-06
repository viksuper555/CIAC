import Image from "next/image";
import styles from "./contentReview.module.scss"

interface Props {
    contentImage: any;
    background: string
}
const ContentReview = ({contentImage, background}: Props) => {

    return (
        <div className={`${styles.contentReviewContainer} ${background}`}>
            <div className={"flex items-center justify-center pt-10"}>
                <span className={styles.titleContainer}>
                    Съдържание
                </span>
            </div>
            <div className={"ml-40 mb-10"}>
                <Image src={contentImage} alt={"asd"}/>
            </div>
        </div>
    )
}

export default ContentReview