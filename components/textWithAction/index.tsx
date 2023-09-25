import styles from './textWithAction.module.scss';
import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
    id?: string;
    scribbleImg: string;
    className?: string;
    hasActionBtn?: boolean
    actionBtnTxt?: string;
    scribbleImgClass?: string;

}

export const TextWithAction = ({
    id, scribbleImg, className, children, actionBtnTxt, hasActionBtn,
    scribbleImgClass
}: Props) => {
    return <div id={id} className={`${className} ${styles.container}`}>
        <img src={scribbleImg} className={`${styles.scribble} ${scribbleImgClass}`}/>
        {children}
        {hasActionBtn &&
            <div className={styles.actionBtn}>
                {actionBtnTxt}
            </div>
        }
    </div>
}