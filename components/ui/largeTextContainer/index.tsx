import styles from './largeTextContainer.module.scss'
import {FC} from "react";
import "../../../app/globals.scss";

interface Props {
    text: string;
    imgSrc: string;
}
const LargeTextContainer:FC<Props> = ({text, imgSrc}) => {

    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                {text}
            </div>
            <div className={styles.imgContainer}>
                <img src={imgSrc}/>
            </div>
        </div>
    )
}

export default LargeTextContainer