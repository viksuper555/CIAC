import styles from "@/components/mainTopic/policy.module.scss";
import React from "react";

interface Props {
    btnText?: string
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