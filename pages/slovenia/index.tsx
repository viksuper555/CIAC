"use client";
import "../../app/globals.scss";
import React, { useState } from "react";
import Navbar from "@/components/navbar";
import StartingModule from "@/components/startingModule";
import ContentReview from "@/components/contentReview";
import infoContent from "@/public/img/bulgaria/infoContent.svg";
import MainTopic from "@/components/mainTopic";
import yellowTitleCircle from "../../public/img/europe/yellowTitleCircle.png";
import blueTitleCircle from "../../public/img/europe/blueTitleCircle.png";
import peopleWithPlanet from "../../public/img/europe/Group.png";
import grayTitleCircle from "../../public/img/bulgaria/grayTitleCircle.png";
import Exam from "@/components/exam";
import SingleStickyNotePage from "@/components/singleStickyNotePage";
import yellowSticky from "../../public/img/bulgaria/StickyBgYellow.png";
import yellowElipse from "../../public/img/bulgaria/yellowElipse.png";
import styles from './slovenia.module.scss';
import workingPeople from "../../public/img/slovenia/workingPeople.png"
import sloveniaCommunity from "../../public/img/slovenia/sloveniaCommunity.png"
import SixInfoStickyNotes from "@/components/sixInfoStickyNotes";
import { Table } from "@/components/table";
import Image from "next/image";
import StickyNote from "@/components/ui/stickyNote";
import blueSticky from "../../public/img/slovenia/blueSticky.png"

const Slovenia = () => {
    const [theme, setTheme] = useState("dark");

    const changeTheme = () => {
        theme === "dark" ? setTheme("light") : setTheme("dark");
    };

    return (
        <div className={"app-container"}>
            <Navbar
                changeTheme={changeTheme} currentTheme={theme}
                className={styles.sectionContainer}
            />
            <StartingModule
                moduleText={"Модул 1 Словения"}
                moduleBackgroundColor={"blueBackground"}
                className={styles.sectionContainer}
            />
            <div className={`${styles.quotesContainer} ${styles.sectionContainer}`}>
                <div className={`${styles.quotesRow} mb-20`}>
                    <div className={styles.quoteMerkel}>
                        <div className={styles.doubleQuoteMerkel}>
                            <img src={'/img/europe/quote_blue.svg'} className={styles.firstQuote}/>
                            <img src={'/img/europe/quote_blue.svg'} className={styles.secondQuote}/>
                        </div>
                        <div className={styles.text}>
                            <p className={styles.person}>Е. Кейси</p>
                            <p className={styles.quoteText}>
                                Мечтите са днешните отговори на утрешните въпроси.
                            </p>
                        </div>
                    </div>

                    <div className={styles.quoteKenedy}>
                        <div className={styles.doubleQuoteKenedy}>
                            <img src={'/img/europe/quote_gray.svg'} className={styles.firstQuote}/>
                            <img src={'/img/europe/quote_gray.svg'} className={styles.secondQuote}/>
                        </div>
                        <div className={styles.text}>
                            <p className={styles.person}>П. Друкър</p>
                            <p className={styles.quoteText}>
                                Най-добрият начин да предвидите бъдещето е да го създадете.
                            </p>
                        </div>
                    </div>
                </div>

                <div className={styles.quotesRow}>
                    <div className={styles.quoteDelore}>
                        <div className={styles.doubleQuoteDelore}>
                            <img src={'/img/europe/quote_yellow.svg'} className={styles.firstQuote}/>
                            <img src={'/img/europe/quote_yellow.svg'} className={styles.secondQuote}/>
                        </div>
                        <div className={styles.text}>
                            <p className={styles.person}>Л. Браун</p>
                            <p className={styles.quoteText}>
                                Личното развитие е ключът към преодоляването на своите ограничения.
                            </p>
                        </div>
                    </div>

                    <div className={styles.quoteBerbatov}>
                        <div className={styles.doubleQuoteBerbatov}>
                            <img src={'/img/europe/quote_darkblue.svg'} className={styles.firstQuote}/>
                            <img src={'/img/europe/quote_darkblue.svg'} className={styles.secondQuote}/>
                        </div>
                        <div className={styles.text}>
                            <p className={styles.person}>Н. Хил</p>
                            <p className={styles.quoteText}>
                                Човек може да постигне всичко, стига да повярва в него.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <ContentReview
                contentImage={infoContent} background={"whiteBackgroundEurope"}
                className={styles.sectionContainer}
            />
            <MainTopic
                titleImage={blueTitleCircle}
                background={"blueBackground"}
                hasButton={true}
                hasTitleImage={true}
                titleText={"Политика"}
                mainText={"Политиката в Словения се формира чрез парламентарна демокрация. Държавата е член на Европейския съюз и НАТО. Политическият пейзаж включва различни партии, като Словенска демократическа партия и Левица. Президентът е главен представител на държавата, а министър-председателят ръководи изпълнителната власт."}
                className={styles.sectionContainer}
                downRightImage={workingPeople}
            />
            <Table
                tableImg={'/img/slovenia/slovTable.png'}
                className={styles.sectionContainer}
            />
            <MainTopic
                titleImage={yellowTitleCircle}
                background={"yellowBackgroundEurope"}
                hasButton={false}
                hasTitleImage={true}
                titleText={"Общество"}
                downRightImage={sloveniaCommunity}
                mainText={"Обществото в Словения е разнообразно и културно богато. Съставено от различни етнически групи, то е обединено от словенския език и културна идентичност. Образованието и науката заемат важно място, а икономиката е стабилна и приветства иновации. Словения предоставя на гражданите социални грижи и качествено здравеопазване. "}
                className={styles.sectionContainer}
            />

            <MainTopic
                titleImage={grayTitleCircle}
                background={"greyBackground"}
                hasButton={false}
                hasTitleImage={true}
                titleText={"Институции"}
                downRightImage={peopleWithPlanet}
                mainText={"Институциите в Словения обхващат различни сфери на държавното управление и функциониране на страната. Включват органи и структури, които се занимават със законодателство, изпълнителна власт, съдебна система, изборни процеси и много други аспекти на обществения живот. Някои от областите, които институциите в Словения обхващат са:\n"}
                className={styles.sectionContainer}
            />
            <SixInfoStickyNotes
                text1={"1. Изпълнителна власт: Правителството и президентът на Република Словения управляват страната и ръководят изпълнителните функции."}
                text2={"2. Законодателство: Парламентът на Република Словения приема закони и регулации, които регулират различни аспекти на обществения живот."}
                text3={"3. Съдебна система: Включва различни съдилища и инстанции, които осигуряват независимо и справедливо правосъдие в страната.\n"}
                text4={"4. Изборни процеси: Институциите, свързани с изборите, организират и контролират изборния процес, включително изборите за президент, парламент и местни органи.\n"}
                text5={"5. Образование и култура: Различни институции поддържат образователните и културни интереси на гражданите."}
                text6={"6. Социални и здравни услуги: Институции, които се грижат за социалното и здравното благосъстояние на гражданите."}
                className={styles.sectionContainer}
            />
            <div id={"three-sticky"} className={styles.sectionContainer}>
                <div className={styles.titleContainer}>
                    <Image src={grayTitleCircle} alt={"commaImg"} className="mt-6"/>
                    <span className={`${styles.titleText}`}>
                       Още
                    </span>
                </div>

                <div className={"flex flex-row justify-center"}>
                    <StickyNote noteImageSrc={blueSticky} circleImageSrc={blueTitleCircle} noteText={"7. Икономика и финанси: Институции, свързани с икономическите и финансовите аспекти на държавното управление."}/>
                    <StickyNote noteImageSrc={yellowSticky} circleImageSrc={yellowElipse} noteText={"8. Местно самоуправление: Общините и регионалните структури управляват местните въпроси и предоставят услуги на гражданите."}/>
                    <StickyNote noteImageSrc={blueSticky} circleImageSrc={blueTitleCircle} noteText={"9. Външна политика и международни отношения: Институции, които се занимават с външните отношения и представителството на страната на международната сцена.\n"}/>
                </div>

            </div>


            <MainTopic
                titleImage={blueTitleCircle}
                background={"blueBackground"}
                hasButton={false}
                hasTitleImage={true}
                titleText={"Информационни страници"}
                downRightImage={peopleWithPlanet}
                mainText={"Политиката в Европа е изключително разнообразна, тъй като Европа се състои от множество държави със собствени правителства и политически системи. Европейският съюз (ЕС) обаче играе ключова роля във формирането на общата политическа атмосфера на континента."}
                className={styles.sectionContainer}
            />
            <MainTopic
                titleImage={blueTitleCircle}
                background={"blueBackground"}
                hasButton={false}
                hasTitleImage={true}
                titleText={"Медийна грамотност и разпознаване на фалшиви новини"}
                downRightImage={peopleWithPlanet}
                mainText={"Европейските институции и много неправителствени организации работят за повишаване на медийната грамотност и разпознаването на фалшиви новини сред гражданите. Това включва обучителни програми, кампании за информиране и насърчаване на критичното мислене при използването на информация от различни източници. Някои от начините, по които хората могат да разпознаят фалшиви новини, включват:"}
                className={styles.sectionContainer}
            />


            <Exam
                titleImage={blueTitleCircle} background={"blueBackground"}
                className={styles.sectionContainer}
            />
            <StartingModule
                moduleText={"Модул 2 Европа"}
                moduleBackgroundColor={"yellowBackgroundEurope"}
                className={styles.sectionContainer}
            />
            <ContentReview
                contentImage={infoContent} background={"yellowBackgroundEurope"}
                className={styles.sectionContainer}
            />
        </div>
    );
};

export default Slovenia;