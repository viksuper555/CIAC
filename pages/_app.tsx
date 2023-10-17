import type { AppProps } from "next/app";
import {LanguageProv} from "@/contexts/LanguageContext";
import Navbar from "@/components/navbar";
import React from "react";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <LanguageProv>
            <Navbar/>
            <Component {...pageProps} />
        </LanguageProv>
    );
}

export default MyApp;
