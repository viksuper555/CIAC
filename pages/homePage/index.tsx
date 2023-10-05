"use client";
import React, { useState } from "react";
import Navbar from "@/components/navbar";
import StartingModule from "@/components/startingModule";
import CenteredScheme from "@/components/centeredScheme";
import scheme1 from "../../public/img/bulgaria/scheme1.png";
import ContentReview from "@/components/contentReview";
import TopLeftImage from "@/components/topLeftImage";
import TopRightImage from "@/components/topRightImage";
import MainTopic from "@/components/mainTopic";
import greenTitleCircle from "../../public/img/bulgaria/greenTitleCircle.png";
import redTitleCircle from "../../public/img/bulgaria/redTitleCircle.png";
import grayTitleCircle from "../../public/img/bulgaria/grayTitleCircle.png";
import peopleDigging from "../../public/img/bulgaria/twoPeopleDigging.png";
import InfoText from "@/components/infoText";
import infoText2 from "../../public/img/bulgaria/imgText2.png";
import infoText1 from "../../public/img/bulgaria/imageText1.png";
import InfoWithNotes from "@/components/infoWithNotes";
import infoContent from "../../public/img/bulgaria/infoContent.png";
import ContentReview2 from "../../public/img/bulgaria/contentReview2.png";
import womenWorking from "../../public/img/bulgaria/womenWorking.png";
import youthText from "../../public/img/bulgaria/youthTextBulgaria.png"
import youthText2 from "../../public/img/bulgaria/youthTextBulgaria2.png"
import Exam from "@/components/exam";
import DownLeftImageTexts from "@/components/downLeftImageTexts";
import handsTree from "../../public/img/bulgaria/handsTree.png";
import volunteerText from "../../public/img/bulgaria/volunteerText.svg"
import europeanInstroTexts from "../../public/img/bulgaria/europeanInstrumentsTexts.png"
import erasmusTexts from "../../public/img/bulgaria/erasmusText.png"
import peopleWorking from "../../public/img/bulgaria/peopleWorking.png"
import cleaning from "../../public/img/bulgaria/cleaning.png"
import greenHandsTree from "../../public/img/bulgaria/greenHandsTree.png"
import falseNews from "../../public/img/bulgaria/falseNews.png"
import heartPeople from "../../public/img/bulgaria/heartPeople.png"
import workAndTravel1 from "../../public/img/bulgaria/workAndTravel1.png"
import workAndTravel2 from "../../public/img/bulgaria/workAndTravel2.png"
import euForPeople from "../../public/img/bulgaria/euForPeople.png"
import europeanInstruments from "../../public/img/bulgaria/europeanInstruments.png"
import docs from "../../public/img/bulgaria/docs.png"
import styles from './bulgaria.module.scss'
import Image from "next/image";
import RedirectButton from "@/components/ui/readMoreBtn";

const HomePage = () => {
    const [theme, setTheme] = useState("dark");

    const changeTheme = () => {
        theme === "dark" ? setTheme("light") : setTheme("dark")
    }

    return (
        <div className={"h-full"}>
            <Navbar changeTheme={changeTheme} currentTheme={theme}/>
            <StartingModule moduleText={"Модул 1 България"} moduleBackgroundColor={"greenBackground"} className={styles.sectionContainer}/>
            <ContentReview contentImage={infoContent} background={"whiteBackground"} className={styles.sectionContainer}/>
            <MainTopic titleImage={greenTitleCircle} background={"greenBackground"} hasButton={true} hasTitleImage={true}
                       className={styles.sectionContainer}
                       titleText={"Политика"} mainText={"Политиката на България се основава на няколко ключови принципа и ценности които определят направлението и приоритетите на държавата. Ето някои от основите за политиката на България."}/>
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
                className={styles.sectionContainer}
            />
            <MainTopic
                background={"redBackground"}
                hasButton={false}
                hasTitleImage={false}
                titleText={"Примерни организации са:"}
                mainText={"социалните партньори (синдикати и сдружения на работодателите); неправителствените организации (например за защита на околната среда и защита на потребителите); местните организации (например младежки и семейни групировки)."}
                downRightImage={peopleDigging}
                className={styles.sectionContainer}
            />
            <MainTopic
                background={"grayBackground"}
                hasButton={true}
                hasTitleImage={true}
                titleImage={grayTitleCircle}
                titleText={"Институции"}
                mainText={"България разполага с разнообразни институции, които играят важна роля в управлението на страната и осигуряват функционирането на различни сектори. По-долу ще разгледаме някои от основните институции в България:"}
                downRightImage={peopleDigging}
                className={styles.sectionContainer}
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
            <Exam titleImage={redTitleCircle} background={"redBackground"} className={styles.sectionContainer}/>
            <StartingModule moduleText={"Модул 2 България"} moduleBackgroundColor={"redBackground"} className={styles.sectionContainer}/>
            <ContentReview contentImage={ContentReview2} background={"redBackground"} className={styles.sectionContainer}/>
            <MainTopic
                background={"grayBackground"}
                hasButton={true}
                hasTitleImage={true}
                titleImage={grayTitleCircle}
                titleText={"Уроци по гражданско образование"}
                mainText={"Уроците по гражданско образование имат за цел да развият при учениците основни граждански компетентности и да ги подготвят да бъдат активни и отговорни граждани. Ето едно общо описание на уроците по гражданско образование:"}
                downRightImage={womenWorking}
                className={styles.sectionContainer}
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
                downRightImage={peopleWorking}
                className={styles.sectionContainer}
            />
            <MainTopic
                background={"redBackground"}
                hasButton={true}
                hasTitleImage={true}
                titleImage={grayTitleCircle}
                titleText={"Уроци по гражданско образование"}
                mainText={"Младежката ангажираност, която включва активното участие и ангажиране на младите хора в обществените въпроси и инициативи, има множество ползи и предимства. Ето някои от тях:"}
                downRightImage={cleaning}
                className={styles.sectionContainer}
            />
            <InfoText background={youthText} bgColor={"redBackground"}/>
            <MainTopic
                background={"grayBackground"}
                hasButton={true}
                hasTitleImage={true}
                titleImage={grayTitleCircle}
                titleText={"Възможности за младежката ангажираност"}
                mainText={"Младежката ангажираност предлага разнообразни възможности за младите хора да се включат и да имат активна роля в обществото. Ето някои от тях:"}
                downRightImage={greenHandsTree}
                className={styles.sectionContainer}
            />
            <InfoText background={volunteerText} bgColor={"grayBackgroundBulgaria"}/>

            <MainTopic
                background={"greenBackground"}
                hasButton={true}
                hasTitleImage={true}
                titleImage={greenTitleCircle}
                titleText={"Медийна грамотност"}
                mainText={"Медийната грамотност и умението да се разпознават фалшиви новини са от изключителна важност в днешното информационно общество. Ето някои аспекти, свързани с тях:"}
                downRightImage={falseNews}
                className={styles.sectionContainer}
            />
            <InfoText background={youthText2} bgColor={"greenBackground"}/>
            <MainTopic
                background={"redBackground"}
                hasButton={false}
                hasTitleImage={true}
                titleImage={redTitleCircle}
                titleText={"Оценка на въздействието на младежката активност"}
                mainText={"Оценката на въздействието на младежката активност включва оценка на личното развитие и уменията на младежите, тяхната гражданска отговорност, въздействието върху общността, влиянието върху политики и системи, както и устойчивостта на активността в дългосрочен план. Оценката може да се провежда с помощта на различни методи и данни, които събират информация за постигнатото въздействие."}
                downRightImage={heartPeople}
                className={styles.sectionContainer}
            />
            <Exam titleImage={redTitleCircle} background={"redBackground"} className={styles.sectionContainer}/>
            <StartingModule moduleText={"Модул 3 България"} moduleBackgroundColor={"grayBackgroundBulgaria"} className={styles.sectionContainer}/>
            <ContentReview contentImage={ContentReview2} background={"redBackground"} className={styles.sectionContainer}/>
            <MainTopic
                background={"greenBackground"}
                hasButton={true}
                hasTitleImage={true}
                titleImage={greenTitleCircle}
                titleText={"Живот, работа, пътуване в ЕС."}
                mainText={"Животът, работата и пътуванията в Европейския съюз (ЕС) предлагат разнообразни възможности и предимства. В ЕС има различни страни с богата култура, история и езици, които може да изследвате."}
                downRightImage={workAndTravel1}
                className={styles.sectionContainer}
            />
            <MainTopic
                background={"redBackground"}
                hasButton={false}
                hasTitleImage={false}
                titleText={""}
                titleImage={greenTitleCircle}
                mainText={"Животът в ЕС предоставя широк спектър от услуги и социални гаранции, като здравеопазване, образование и социална помощ. Системите за социална сигурност и защита на работниците обикновено са добре развити, като включват пенсии, болнични и осигуряване при безработица. Работата в ЕС предоставя възможности за кариерно развитие и професионални предимства. Гражданите на държавите - членки могат да търсят работа в други страни от ЕС без ограничения. Това отваря врати за разнообразни работни места и професионални възможности.\n"}
                downRightImage={workAndTravel2}
                className={styles.sectionContainer}
            />
            <MainTopic
                background={"grayBackgroundBulgaria"}
                hasButton={true}
                hasTitleImage={true}
                titleImage={grayTitleCircle}
                titleText={"Какво прави ЕС за своите граждани?"}
                mainText={"Европейският съюз (ЕС) предприема множество мерки и инициативи, за да защити и подпомогне своите граждани. ЕС има широк обхват от политики и програми, насочени към различни аспекти на живота на гражданите, включително:"}
                downRightImage={euForPeople}
                className={styles.sectionContainer}
            />
            <DownLeftImageTexts background={"grayBackgroundBulgaria"} leftImage={handsTree}/>

        <MainTopic
            background={"greenBackground"}
            hasButton={true}
            hasTitleImage={true}
            titleImage={grayTitleCircle}
            titleText={"Кои са европейските инструменти?"}
            mainText={"Европейският съюз (ЕС) разполага с разнообразни инструменти, които се използват за изграждане и управление на общата политика на ЕС. Някои от основните европейски инструменти включват:"}
            downRightImage={europeanInstruments}
            className={styles.sectionContainer}
        />
        <InfoText background={europeanInstroTexts} bgColor={"greenBackground"}/>
        <MainTopic
            background={"redBackground"}
            hasButton={true}
            hasTitleImage={true}
            titleImage={grayTitleCircle}
            titleText={"Документи и публикации на програмата „Еразъм+“."}
            mainText={"За да следвате приоритетите на програмата Еразъм+, можете да се запознаете с документите и публикациите, свързани с нея. Ето някои от основните източници на информация:"}
            downRightImage={docs}
            className={styles.sectionContainer}
        />
        <InfoText background={erasmusTexts} bgColor={"redBackground"}/>
        <Exam titleImage={redTitleCircle} background={"redBackground"} className={styles.sectionContainer}/>
        </div>
    )
}

export default HomePage