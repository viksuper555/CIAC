import styles from './infoText.module.scss'

interface Props {
    background: string
}

const InfoText = ({ background }: Props) => {

    return (
        <div className={`${background} ${styles.infoTextContainer} mt-12`}>

        </div>
    )
}

export default InfoText;