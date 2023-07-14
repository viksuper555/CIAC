"use client";
import { useState } from "react";
import Navbar from "@/components/navbar";
import StartingModule from "@/components/startingModule";
import CenteredScheme from "@/components/centeredScheme";
import scheme1 from "../../public/scheme1.png"
import ContentReview from "@/components/contentReview";
import TopLeftImage from "@/components/topLeftImage";
import TopRightImage from "@/components/topRightImage";
import MainTopic from "@/components/mainTopic";
import greenTitleCircle from "../../public/greenTitleCircle.png";
import redTitleCircle from "../../public/redTitleCircle.png";
import grayTitleCircle from "../../public/grayTitleCircle.png"
import peopleDigging from "../../public/twoPeopleDigging.png"


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
            <MainTopic titleImage={greenTitleCircle} background={"greenBackground"} hasButton={true} hasTitleImage={true} titleText={"Политика"} mainText={"Политиката на България се основава на няколко ключови принципа и ценности които определят направлението и приоритетите на държавата. Ето някои от основите за политиката на България."}/>
            <CenteredScheme hasTitle={true} centerImageSrc={scheme1} text={"Държавно управление на Република България"}/>
            <TopLeftImage/>
            <TopRightImage/>
            <MainTopic
                titleImage={redTitleCircle}
                background={"redBackground"}
                hasButton={true}
                hasTitleImage={true}
                titleText={"Общество"}
                mainText={"Българското общество е разнообразно и многопластово, съставено от граждани с различни социални, културни и етнически идентичности. То е резултат от историческото развитие на страната и включва различни социални групи, като работници, фермери, бизнесмените, интелектуалците, пенсионерите и други."}
            />
            <MainTopic
                background={"redBackground"}
                hasButton={false}
                hasTitleImage={false}
                titleText={"Примерни организации са:"}
                mainText={"социалните партньори (синдикати и сдружения на работодателите);" + "неправителствените организации (например за защита на околната среда и защита на потребителите);\n" + "местните организации (например младежки и семейни групировки)."}
                downRightImage={peopleDigging}
            />
            <MainTopic
                background={"grayBackground"}
                hasButton={true}
                hasTitleImage={true}
                titleImage={grayTitleCircle}
                titleText={"Институции"}
                mainText={"България разполага с разнообразни институции, които играят важна роля в управлението на страната и осигуряват функционирането на различни сектори. По-долу ще разгледаме някои от основните институции в България:"}
                downRightImage={peopleDigging}
            />
        </div>
    )
}

export default HomePage