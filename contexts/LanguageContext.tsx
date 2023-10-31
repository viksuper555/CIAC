"use client";
import {useState, createContext, ReactNode, useContext, useEffect} from "react";
import languages from '../langs/index'

const LANGUAGES: any = languages

const LanguageContext = createContext({} as any)

interface Props {
    children: ReactNode
}

const LanguageProv = ({ children }: Props) => {
    const handleDefaultLocale = (locale: string) => {
        console.log("i reach here")
        return LANGUAGES[locale]
    }
    let getDefaultLocale

    let defaultLocale = getDefaultLocale ? handleDefaultLocale(getDefaultLocale) : LANGUAGES.eng

    const [language, setLanguage] = useState<any>(defaultLocale)
    const [localeHandler, setLocaleHandler] = useState("eng")

    const changeLanguage = (event: any) => {
        setLanguage(LANGUAGES[event])
        localStorage.setItem('locale', event)
    }

    useEffect(() => {
        getDefaultLocale = localStorage.getItem("locale")
        setLocaleHandler(getDefaultLocale)
        defaultLocale = getDefaultLocale ? handleDefaultLocale(getDefaultLocale) : LANGUAGES.eng
        setLanguage(defaultLocale)
    }, [getDefaultLocale, language]);

    return (
        <LanguageContext.Provider value={{
            texts: language,
            changeLanguage,
            locale: localeHandler
        }}
        >
            {children}
        </LanguageContext.Provider>
    )
}

const getTexts = () => useContext(LanguageContext);

export {
    getTexts,
    LanguageProv,
    LanguageContext
}