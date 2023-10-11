import type { AppProps } from "next/app";
import {LanguageProv} from "@/contexts/LanguageContext";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <LanguageProv>
            <Component {...pageProps} />
        </LanguageProv>
    );
}

export default MyApp;
