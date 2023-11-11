import OpenAI from "openai";
import React, {useEffect, useState} from "react";
import styles from './chatGpt.module.scss'
import config from "@/lib/config";
import {getTexts} from "@/contexts/LanguageContext";
import Spinner from "@/components/ui/spinner";

interface Props {
    prompt: string;
}

const ChatGpt = () => {
    const [prompt, setPrompt] = useState("");
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [response, setResponse] = useState<any>("");
    const [generatingResponse, setGeneratingResponse] = useState<boolean>(false);

    const {texts: {components: texts}} = getTexts();

    useEffect(() => {
        window.addEventListener(config.CHATGPT_MSG, (event: any) => handleNewMessage(event));
    }, []);

    const handleNewMessage = (event: any) => {
        if(event) {
            setIsOpen(true)
            setPrompt(event.detail)
        }
    }

    const handleClose = () => {
        setIsOpen(false)
        setPrompt("")
    }

    const handleInputChange = (event: any) => {
        setPrompt(event?.target?.value);
    }
    const askChatGPT = async () => {
        if (!generatingResponse) {
            if (prompt?.length <= 0) {
                alert(texts.validMessage);
            }

            setGeneratingResponse(true);
            const openai = new OpenAI({
                apiKey: process.env.NEXT_PUBLIC_API_KEY,
                dangerouslyAllowBrowser: true
            });

            setResponse("");
            const chatCompletion = await openai.chat.completions.create({
                messages: [{ role: 'user', content: `${texts.shortSummary}` +prompt }],
                model: 'gpt-3.5-turbo',
            });

            if (!chatCompletion?.choices[0]?.message?.content) {
                alert("Something went wrong! Please try asking another question...")
            } else {
                setResponse(`Q: ${prompt}\n\nA: ${chatCompletion?.choices[0]?.message?.content}`)
            }

            setGeneratingResponse(false);
        } else {
            alert("Please wait, a response is being generated for you! :)")
        }
    }

    return(
        <div className={isOpen ? styles.chatContainer : styles.chatIcon}>
            {!isOpen && <div className={styles.chatIcon}>
                <img src={'img/ChatGPT.png'} onClick={() => setIsOpen(true)} height={70} width={94}/>
            </div>
            }
            {isOpen && <div className={styles.CGPTContentDownRight}>
                <div className={styles.closeBtn} onClick={handleClose}> X</div>
                <div className={styles.CGPTInputWrapper}>
                    <input
                        id={"chatGPT-prompt"}
                        placeholder={texts.enterSentence}
                        className={styles.CGPTInput}
                        value={prompt}
                        onChange={handleInputChange}
                    />
                    <img
                        src={'img/sendMsg.png'}
                        className={styles.askChatGPTBtn}
                        onClick={askChatGPT}
                        title={generatingResponse ? "Generating response, please wait..." : ""}
                    />
                </div>
                <pre id={"response-body"} className={styles.CGPTResponse}>
                        {response ?? "Response will be generated here..."}
                        {generatingResponse && <Spinner/>}
                </pre>
            </div>
            }
        </div>
        )
}


export default ChatGpt