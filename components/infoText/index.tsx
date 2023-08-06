import styles from './infoText.module.scss'
import Image from "next/image"

interface Props {
    background: string
}

const InfoText = ({ background }: Props) => {

    return (
        <div className={`${background} ${styles.infoTextContainer} mt-12`}>
            <Image src={background} alt={"infoText"}/>
        </div>
    )
}

export default InfoText;