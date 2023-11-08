import styles from "@/components/mainTopic/mainTopic.module.scss";
import React, {useEffect} from "react";
import {dispatchCustomEvent} from "@/lib/functions";
import config from "@/lib/config";
import {getTexts} from "@/contexts/LanguageContext";

interface Props {
    btnText?: string | undefined;
    btnClass?: string | undefined;
    chatGptMessage?: string
}
const RedirectButton = ( { btnText, btnClass, chatGptMessage }: Props ) => {
    const {texts: {components: texts}, locale} = getTexts();

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
                {btnText ?? `${texts.seeMore}`}
            </div>
        </>
    )
}

export default RedirectButton