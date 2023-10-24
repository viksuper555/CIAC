import styles from "@/components/mainTopic/mainTopic.module.scss";
import React, {useEffect} from "react";
import {dispatchCustomEvent} from "@/lib/functions";
import config from "@/lib/config";

interface Props {
    btnText?: string | undefined;
    btnClass?: string | undefined;
    chatGptMessage?: string
}
const RedirectButton = ( { btnText, btnClass, chatGptMessage }: Props ) => {

    useEffect(() => {
        dispatchCustomEvent(config.CHATGPT_MSG, chatGptMessage)
    }, []);
    const handleChatMessage = () => {
        console.log("i trigger")
        dispatchCustomEvent(config.CHATGPT_MSG, chatGptMessage)
    }
    return (
        <>
            <div className={`${styles.button} ${btnClass}`} onClick={handleChatMessage}>
                {btnText ?? "Виж още"}
            </div>
        </>
    )
}

export default RedirectButton