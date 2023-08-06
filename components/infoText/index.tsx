import styles from './infoText.module.scss'
import Image from "next/image"

interface Props {
    background: any;
    bgColor: string;
}

const InfoText = ({ background, bgColor }: Props) => {

    return (
        <div className={`${styles.infoTextContainer} ${bgColor}`}>
            <Image src={background} alt={"infoText"}/>
        </div>
    )
}

export default InfoText;