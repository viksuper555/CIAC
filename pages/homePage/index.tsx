"use client";
import { useState } from "react";
import Navbar from "@/components/navbar";
import StartingModule from "@/components/startingModule";
import Policy from "@/components/policy";
import CenteredScheme from "@/components/centeredScheme";
import scheme1 from "../../public/scheme1.png"
import ContentReview from "@/components/contentReview";
import TopLeftImage from "@/components/topLeftImage";
import TopRightImage from "@/components/topRightImage";

const HomePage = () => {
    const [theme, setTheme] = useState("dark");

    const changeTheme = () => {
        theme === "dark" ? setTheme("light") : setTheme("dark")
    }

    return (
        <div className={"h-full"}>
            <Navbar changeTheme={changeTheme} currentTheme={theme}/>
            <StartingModule/>
            <ContentReview/>
            <Policy hasButton={true}/>
            <CenteredScheme hasTitle={true} centerImageSrc={scheme1} text={"Държавно управление на Република България"}/>
            <TopLeftImage/>
            <TopRightImage/>
        </div>
    )
}

export default HomePage