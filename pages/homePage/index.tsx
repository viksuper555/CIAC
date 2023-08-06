"use client";
import { useState } from "react";
import Navbar from "@/components/navbar";
import StartingModule from "@/components/startingModule";
import CenteredScheme from "@/components/centeredScheme";
import scheme1 from "../../public/scheme1.png";
import ContentReview from "@/components/contentReview";
import TopLeftImage from "@/components/topLeftImage";
import TopRightImage from "@/components/topRightImage";
import MainTopic from "@/components/mainTopic";
import greenTitleCircle from "../../public/greenTitleCircle.png";
import redTitleCircle from "../../public/redTitleCircle.png";
import grayTitleCircle from "../../public/grayTitleCircle.png";
import peopleDigging from "../../public/twoPeopleDigging.png";
import InfoText from "@/components/infoText";
import infoText2 from "../../public/imgText2.png";
import infoText1 from "../../public/imageText1.png";
import InfoWithNotes from "@/components/infoWithNotes";
import infoContent from "../../public/infoContent.svg";
import ContentReview2 from "../../public/contentReview2.png";
import womenWorking from "../../public/womenWorking.png";
import youthText from "../../public/youthTextBulgaria.png"
import youthText2 from "../../public/youthTextBulgaria2.png"
import Exam from "@/components/exam";

const HomePage = () => {
    const [theme, setTheme] = useState("dark");

    const changeTheme = () => {
        theme === "dark" ? setTheme("light") : setTheme("dark")
    }

    return (
        <div className={"h-full"}>
            <Navbar changeTheme={changeTheme} currentTheme={theme}/>
            <StartingModule moduleText={"Модул 1 България"} moduleBackgroundColor={"greenBackground"}/>
            <ContentReview contentImage={infoContent} background={"whiteBackground"}/>
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
                mainText={"социалните партньори (синдикати и сдружения на работодателите); неправителствените организации (например за защита на околната среда и защита на потребителите); местните организации (например младежки и семейни групировки)."}
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
            <InfoText background={infoText1} bgColor={"grayBackground"}/>
            <InfoText background={infoText2} bgColor={"grayBackground"}/>
            <InfoWithNotes
                background={"grayBackground"}
                hasTitleImage={true}
                titleImage={grayTitleCircle}
                titleText={"Информационни страници"}
                mainText={"Гражданското участие е важен аспект на демократичното общество и представлява активното участие на гражданите в процесите на вземане на решения и формиране на обществените политики. То включва правото на глас, свободата на изразяване на мнение, свободата на сдружаване и мирното събиране. В България гражданското участие се осъществява чрез различни форми и инструменти:"}
            />

            <StartingModule moduleText={"Модул 2 България"} moduleBackgroundColor={"redBackground"}/>
            <ContentReview contentImage={ContentReview2} background={"redBackground"}/>
            <MainTopic
                background={"grayBackground"}
                hasButton={true}
                hasTitleImage={true}
                titleImage={grayTitleCircle}
                titleText={"Уроци по гражданско образование"}
                mainText={"Уроците по гражданско образование имат за цел да развият при учениците основни граждански компетентности и да ги подготвят да бъдат активни и отговорни граждани. Ето едно общо описание на уроците по гражданско образование:"}
                downRightImage={womenWorking}
            />
            <InfoWithNotes
                background={"grayBackground"}
                hasTitleImage={true}
                titleImage={grayTitleCircle}
                mainText={""}
                titleText={"Няколко примера за уроци по гражданско образование:"}
            />
            <MainTopic
                background={"greenBackground"}
                hasButton={false}
                hasTitleImage={true}
                titleImage={greenTitleCircle}
                titleText={"Младежка ангажираност в действие"}
                mainText={"Младежката ангажираност в действие представлява активното включване на младите хора в обществения живот и предприемането на конкретни действия за промяна. Тя насърчава младите хора да се ангажират с проблемите и предизвикателствата в своите общности и да работят за тяхното решаване. Това може да включва доброволчество, социални проекти, политическо ангажиране и други инициативи. "}
                downRightImage={womenWorking}
            />
            <MainTopic
                background={"redBackground"}
                hasButton={true}
                hasTitleImage={true}
                titleImage={grayTitleCircle}
                titleText={"Уроци по гражданско образование"}
                mainText={"Младежката ангажираност, която включва активното участие и ангажиране на младите хора в обществените въпроси и инициативи, има множество ползи и предимства. Ето някои от тях:"}
                downRightImage={womenWorking}
            />
            <InfoText background={youthText} bgColor={"redBackground"}/>
            <MainTopic
                background={"grayBackground"}
                hasButton={true}
                hasTitleImage={true}
                titleImage={grayTitleCircle}
                titleText={"Възможности за младежката ангажираност"}
                mainText={"Младежката ангажираност предлага разнообразни възможности за младите хора да се включат и да имат активна роля в обществото. Ето някои от тях:"}
                downRightImage={womenWorking}
            />
            <InfoText background={youthText2} bgColor={"grayBackground"}/>
            <MainTopic
                background={"greenBackground"}
                hasButton={true}
                hasTitleImage={true}
                titleImage={greenTitleCircle}
                titleText={"Медийна грамотност"}
                mainText={"Медийната грамотност и умението да се разпознават фалшиви новини са от изключителна важност в днешното информационно общество. Ето някои аспекти, свързани с тях:"}
                downRightImage={womenWorking}
            />
            <InfoText background={youthText2} bgColor={"greenBackground"}/>
            <MainTopic
                background={"redBackground"}
                hasButton={false}
                hasTitleImage={true}
                titleImage={redTitleCircle}
                titleText={"Оценка на въздействието на младежката активност"}
                mainText={"Оценката на въздействието на младежката активност включва оценка на личното развитие и уменията на младежите, тяхната гражданска отговорност, въздействието върху общността, влиянието върху политики и системи, както и устойчивостта на активността в дългосрочен план. Оценката може да се провежда с помощта на различни методи и данни, които събират информация за постигнатото въздействие."}
                downRightImage={womenWorking}
            />

            <StartingModule moduleText={"Модул 3 България"} moduleBackgroundColor={"greyBackground"}/>
            <ContentReview contentImage={ContentReview2} background={"redBackground"}/>
            <MainTopic
                background={"greenBackground"}
                hasButton={true}
                hasTitleImage={true}
                titleImage={greenTitleCircle}
                titleText={"Живот, работа, пътуване в ЕС."}
                mainText={"Животът, работата и пътуванията в Европейския съюз (ЕС) предлагат разнообразни възможности и предимства. В ЕС има различни страни с богата култура, история и езици, които може да изследвате."}
                downRightImage={womenWorking}
            />
            <MainTopic
                background={"redBackground"}
                hasButton={false}
                hasTitleImage={false}
                titleImage={greenTitleCircle}
                mainText={"Животът в ЕС предоставя широк спектър от услуги и социални гаранции, като здравеопазване, образование и социална помощ. Системите за социална сигурност и защита на работниците обикновено са добре развити, като включват пенсии, болнични и осигуряване при безработица. Работата в ЕС предоставя възможности за кариерно развитие и професионални предимства. Гражданите на държавите - членки могат да търсят работа в други страни от ЕС без ограничения. Това отваря врати за разнообразни работни места и професионални възможности.\n"}
                downRightImage={womenWorking}
            />
            <MainTopic
                background={"greyBackground"}
                hasButton={true}
                hasTitleImage={true}
                titleImage={grayTitleCircle}
                titleText={"Какво прави ЕС за своите граждани?"}
                mainText={"Европейският съюз (ЕС) предприема множество мерки и инициативи, за да защити и подпомогне своите граждани. ЕС има широк обхват от политики и програми, насочени към различни аспекти на живота на гражданите, включително:"}
                downRightImage={womenWorking}
            />
           <Exam titleImage={redTitleCircle}/>
        </div>
    )
}

export default HomePage