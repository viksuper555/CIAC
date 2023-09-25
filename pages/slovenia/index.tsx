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
import {TextWithAction} from "@/components/textWithAction";
import sloveniaContentTwo from "../../public/img/slovenia/sloveniaContentTwo.png"
import citizenEducation from "../../public/img/slovenia/citizenEducation.png"
import FiveInfoStickyNotes from "@/components/fiveInfoStickyNotes";

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
                hasButton={true}
                hasTitleImage={true}
                titleText={"Информационни страници"}
                downRightImage={peopleWithPlanet}
                mainText={"Политиката в Европа е изключително разнообразна, тъй като Европа се състои от множество държави със собствени правителства и политически системи. Европейският съюз (ЕС) обаче играе ключова роля във формирането на общата политическа атмосфера на континента."}
                className={styles.sectionContainer}
            />

            <TextWithAction
                className={`${styles.sectionContainer} ${styles.bgBlue}`}
                scribbleImg={'/img/Scribble.svg'}
                hasActionBtn={false}
                actionBtnTxt={"Към списък"}
            >
                <p>
                    <b>1. Избори:</b> Гражданите на Словения имат правото да участват
                    в парламентарни, президентски и местни избори. Изборите
                    са ключов момент за гражданско участие
                    и възможност за изразяване на политическия избор.
                </p>
                <br/>
                <p>
                    <b>2. Граждански организации:</b> В страната действат множество граждански
                    организации, които се занимават с различни социални, икономически и
                    екологични въпроси. Тези организации предоставят платформа за гражданско
                    участие и ангажимент в решаването на важни въпроси.
                </p>
                <br/>
                <p>
                    <b>3. Обществени консултации:</b> Властите в Словения често организират публични
                    консултации по различни въпроси, като икономика, екология, образование и
                    др. Това позволява на гражданите да изразят своите мнения и предложения.
                </p>
                <br/>
                <p>
                    <b>4. Социални движения и протести:</b> Гражданите на Словения са се ангажирали в
                    различни социални движения и протести, които се фокусират върху различни
                    проблеми и въпроси. Тези действия често предизвикват
                    обществен дебат и влияние върху политиките.
                </p>
                <br/>
                <p>
                    <b>5. Медии и онлайн участие:</b> Гражданите имат възможност да изразят своите
                    мнения и да споделят информация чрез медиите и социалните мрежи.
                    Това позволява на обществото да бъде информирано и активно участие в дискусии.
                </p>
                <br/>
                <p className={"text-opacity-25"}>
                    Гражданското участие играе важна роля в развитието на
                    демократичното общество в Словения, като дава глас на гражданите
                    и подпомага тяхната участие в процеса на вземане на решения.
                </p>
            </TextWithAction>

            <Exam
                titleImage={blueTitleCircle} background={"blueBackground"}
                className={styles.sectionContainer}
            />


            <StartingModule
                moduleText={"Модул 2 Словения"}
                moduleBackgroundColor={styles.bgRed}
                className={styles.sectionContainer}
            />

            <ContentReview
                contentImage={sloveniaContentTwo} background={styles.bgRed}
                className={styles.sectionContainer}
            />
            <MainTopic
                titleImage={blueTitleCircle}
                background={"blueBackground"}
                hasButton={true}
                hasTitleImage={true}
                titleText={"Уроци по гражданско образование"}
                downRightImage={citizenEducation}
                mainText={"Гражданското образование в Словения има за цел да подготви граждани със знания, умения и ценности, необходими за активно и отговорно участие в демократичното общество. То включва учебни програми, уроци и дейности, които развиват гражданска отговорност, критично мислене, умения за участие в обществените процеси и разбирателство към разнообразието. "}
                className={styles.sectionContainer}
            />

            <div className={styles.sectionContainer}>
                <p className={styles.title}>
                    Няколко характеристики на гражданското образование в страната:
                </p>
                <SixInfoStickyNotes
                    text1={"1. Учебни програми и уроци: Гражданското образование е интегрирано в учебните програми на различни образователни степени - от начално до средно образование. Уроците включват теми като правата на човека, демокрацията, участие в обществото, околната среда и други."}
                    text2={"2. Ценности на демокрацията: Образователната система насърчава ценности като свобода, толерантност, равноправие и уважение към мненията на другите. Гражданско образование помага на учениците да разберат и оценят различията в обществото.\n"}
                    text3={"3. Учебни материали: Учебниците и материалите за гражданско образование се актуализират, за да отразят актуалните събития и предизвикателства в обществото. Това помага на учениците да разберат реалните въпроси, пред които се изправя демокрацията.\n"}
                    text4={"4. Учебни методи: Гражданското образование се основава на интерактивни и учаственически методи на обучение. Учениците се стимулират да изразяват мненията си, да провеждат дебати и да работят в групи.\n"}
                    text5={"5. Гражданска отговорност и активизъм: Учениците се насърчават да се ангажират с обществото и да участват в инициативи, които насърчават промени за подобряване на обществото."}
                    text6={"6. Подготовка за граждански живот: Гражданското образование предоставя умения, необходими за участие в граждански организации, процеси на вземане на решения и решаване на обществени проблеми."}
                />
            </div>
            <MainTopic
                titleImage={blueTitleCircle}
                background={"blueBackground"}
                hasButton={false}
                hasTitleImage={true}
                titleText={"Младежка ангажираност в действие"}
                downRightImage={citizenEducation}
                mainText={"Младежката ангажираност в Словения е насърчавана и подкрепяна чрез различни програми, организации и инициативи. Ето няколко аспекта на младежката ангажираност в действие в Словения: Младежки организации и структури: Съществуват множество младежки организации и структури, които се занимават с организиране на събития, проекти, обучения и кампании за младежи."}
                className={styles.sectionContainer}
            />
            <FiveInfoStickyNotes
                text1={"Европейски програми: Словения участва в различни европейски програми и инициативи, които насърчават младежката ангажираност."}
                text2={"Младежки образователни програми В Словения има образователни програми и курсове, които се фокусират върху развитието на лидерски умения, предприемачество, социални умения и други умения, които са полезни за младежката ангажираност."}
                text3={"Доброволчество и гражданска активност: Младежите в Словения имат възможност да се включат в доброволчески проекти и граждански инициативи, които се занимават с разнообразни въпроси като околната среда, образование, култура и социална интеграция."}
                text4={"Младежки центрове и събития: Младежките центрове в различни градове на Словения предоставят място за срещи, обучения, дискусии и събития за младежи. Тези центрове могат да бъдат инициирани както от държавата, така и от неправителствени организации."}
                text5={"Финансова подкрепа: Младежката ангажираност в Словения може да бъде подкрепена и финансово чрез грантове и фондове, които се предоставят за младежки проекти и инициативи."}
            />
            <MainTopic
                titleImage={blueTitleCircle}
                background={"blueBackground"}
                hasButton={true}
                hasTitleImage={true}
                titleText={"Ползи от младежката ангажираност"}
                downRightImage={citizenEducation}
                mainText={"Младежката ангажираност в Словения представлява активното и съзнателно участие на младежите в различни области на обществото с цел постигане на промени и подобрения. Тази ангажираност играе важна роля в развитието на младежите като граждани, които разбират важността на участието си в обществото и имат възможност да изразяват своите мнения и идеи.\n"}
                className={styles.sectionContainer}
            />
            <TextWithAction
                className={`${styles.sectionContainer} ${styles.bgBlue}`}
                scribbleImg={'/img/scribble.svg'}
                hasActionBtn={false}
                actionBtnTxt={"Към списък"}
            >
                <p>
                    <b>1. Лично и професионално развитие:</b> Участието в младежки организации,
                    инициативи и проекти предоставя на младежите възможност да развият
                    комуникационни умения, лидерски качества, решаване на проблеми и работа в екип.
                    Тези умения са ценни както в личния, така и в професионалния им живот.
                </p>
                <br/>
                <p>
                    <b>2. Гражданска отговорност и активност: </b> Участието на младежите в обществени
                    инициативи ги учи за активното участие в обществото.
                    Те разбират какво означава да бъдеш отговорен гражданин,
                    да се ангажираш с важни въпроси и да участваш в обществените решения.
                </p>
                <br/>
                <p>
                    <b>3. Повишаване на самочувствието:</b> Младежите, които са ангажирани в обществени
                    инициативи, често изпитват повишена самоувереност и усещане за постижение.
                    Това може да има позитивен ефект върху тяхното общо благополучие.
                </p>
                <br/>
                <p>
                    <b>4. Социални връзки и мрежи:</b> Младежката ангажираност дава възможност на
                    младежите да се срещат и работят с хора от различни области
                    и фонове. Това помага за създаването на ценни социални мрежи и контакти.
                </p>
                <br/>
                <p>
                    <b>5. Промяна в обществото:</b> Младежите са често двигатели на промени в обществото.
                    Тяхната ангажираност може да доведе до подобрения в области като образование,
                    околна среда, култура и социални услуги.
                </p>
                <br/>
                <p>
                    <b>6. Диверситет на гледните точки:</b>
                    Младежите представляват разнообразна група с различни гледни точки и идеи.
                    Тяхната ангажираност спомага за по-широк диалог и обмен на идеи,
                    което обогатява обществото.
                </p>
            </TextWithAction>



        </div>
    );
};

export default Slovenia;