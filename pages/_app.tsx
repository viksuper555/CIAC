import type { AppProps } from "next/app";
import {LanguageProv} from "@/contexts/LanguageContext";
import Navbar from "@/components/navbar";
import React from "react";
import ChatGpt from "@/components/ui/chatGpt";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <LanguageProv>
            <Navbar/>
            <Component {...pageProps} />
            <ChatGpt/>
        </LanguageProv>
    );
}

export default MyApp;
