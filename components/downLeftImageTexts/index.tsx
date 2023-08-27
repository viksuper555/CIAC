import React from "react";
import styles from './downLeftImageTexts.module.scss'
import Image from "next/image";

interface Props {
    background: any,
    leftImage: any
}

const DownLeftImageTexts = ({background, leftImage}: Props) => {

    return (
        <>
            <div className={`${styles.container} ${background}`}>
                <div className={styles.imageContainer}>
                    <Image src={leftImage} alt={"commaImg"} className="mt-6"/>
                </div>
                <div className={styles.textsContainer}>
                    <div className={styles.text}> 1. Свобода на движение: ЕС гарантира свободно движение на хора, стоки, услуги и капитали между държавите-членки. Това означава, че гражданите на ЕС имат право да живеят, работят, учат и пътуват във всяка от страните-членки без дискриминация. </div>
                    <div className={styles.text}>  2. Социални права и защита: ЕС насърчава социална солидарност и защита на правата на работниците. Той установява минимални стандарти за работно време, безопасност и здраве при работа, равно третиране и защита от дискриминация. Също така, ЕС се грижи за защита на правата на потребителите и насърчаване на равенството между половете.</div>
                    <div className={styles.text}> 3. Здравеопазване и безопасност: ЕС подкрепя сътрудничество в областта на здравеопазването, предоставя инструменти за борба с глобални заплахи като пандемии и осигурява регулаторен контрол и безопасност на храните и продуктите на пазара.</div>
                </div>
            </div>

        </>
    )
}

export default DownLeftImageTexts