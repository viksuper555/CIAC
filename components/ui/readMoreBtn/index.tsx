import styles from "@/components/mainTopic/mainTopic.module.scss";
import React from "react";

interface Props {
    btnText?: string | undefined;
    btnClass?: string | undefined;
}
const RedirectButton = ( { btnText, btnClass }: Props ) => {
    return (
        <>
            <div className={`${styles.button} ${btnClass}`}>
                {btnText ?? "Виж още"}
            </div>
        </>
    )
}

export default RedirectButton