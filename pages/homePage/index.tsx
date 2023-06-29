"use client";
import { useState } from "react";
import Navbar from "@/components/navbar";
import StartingModule from "@/components/startingModule";


const HomePage = () => {
    const [theme, setTheme] = useState("dark");

    const changeTheme = () => {
        theme === "dark" ? setTheme("light") : setTheme("dark")
    }

    return (
        <div data-theme={theme}>
            <Navbar changeTheme={changeTheme} currentTheme={theme}/>
            <StartingModule/>
        </div>
    )
}

export default HomePage