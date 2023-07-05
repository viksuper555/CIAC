"use client";
import { useState } from "react";
import Navbar from "@/components/navbar";
import StartingModule from "@/components/startingModule";
import Policy from "@/components/policy";
import CenteredScheme from "@/components/centeredScheme";


const HomePage = () => {
    const [theme, setTheme] = useState("dark");

    const changeTheme = () => {
        theme === "dark" ? setTheme("light") : setTheme("dark")
    }

    return (
        <div className={"h-full"}>
            <Navbar changeTheme={changeTheme} currentTheme={theme}/>
            <StartingModule/>
            <Policy/>
            <CenteredScheme/>
        </div>
    )
}

export default HomePage