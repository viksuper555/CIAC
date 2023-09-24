import styles from "@/components/mainTopic/mainTopic.module.scss";
import React from "react";

interface Props {
    btnText?: string | undefined;
}
const RedirectButton = ( {btnText}: Props ) => {
    return (
        <>
            <div className={styles.button}>
                {btnText ?? "Виж още"}
            </div>
        </>
    )
}

export default RedirectButton