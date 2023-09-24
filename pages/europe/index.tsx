"use client";
import "../../app/globals.scss";
import { useState } from "react";
import Navbar from "@/components/navbar";
import StartingModule from "@/components/startingModule";
import ContentReview from "@/components/contentReview";
import infoContent from "@/public/img/bulgaria/infoContent.png";
import MainTopic from "@/components/mainTopic";
import yellowTitleCircle from "../../public/img/europe/yellowTitleCircle.png";
import blueTitleCircle from "../../public/img/europe/blueTitleCircle.png";
import peopleWithPlanet from "../../public/img/europe/Group.png";
import grayTitleCircle from "../../public/img/bulgaria/grayTitleCircle.png";
import FiveInfoStickyNotes from "@/components/fiveInfoStickyNotes";
import Exam from "@/components/exam";
import SingleStickyNotePage from "@/components/singleStickyNotePage";
import yellowSticky from "../../public/img/bulgaria/StickyBgYellow.png";
import yellowElipse from "../../public/img/bulgaria/yellowElipse.png";
import styles from './europe.module.scss';
import { Table } from '@/components/table';
import { TextWithAction } from "@/components/textWithAction";

const Europe = () => {
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
                moduleText={"Модул 1 Европа"}
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
                            <p className={styles.person}>A. Меркел</p>
                            <p className={styles.quoteText}>
                                Европа е мозайка на културите, която прави нашия континент толкова уникален.
                            </p>
                        </div>
                    </div>

                    <div className={styles.quoteKenedy}>
                        <div className={styles.doubleQuoteKenedy}>
                            <img src={'/img/europe/quote_gray.svg'} className={styles.firstQuote}/>
                            <img src={'/img/europe/quote_gray.svg'} className={styles.secondQuote}/>
                        </div>
                        <div className={styles.text}>
                            <p className={styles.person}>Д. Кенеди</p>
                            <p className={styles.quoteText}>
                                Европа е мястото, където историята се преплита със съвременността, а традициите се срещат с иновациите.
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
                            <p className={styles.person}>Ж. Делор</p>
                            <p className={styles.quoteText}>
                                Европа е историята и цивилизацията, и културата и идеите, и мечтите. Тя е бъдещето и надеждата на всички наши народи.
                            </p>
                        </div>
                    </div>

                    <div className={styles.quoteBerbatov}>
                        <div className={styles.doubleQuoteBerbatov}>
                            <img src={'/img/europe/quote_darkblue.svg'} className={styles.firstQuote}/>
                            <img src={'/img/europe/quote_darkblue.svg'} className={styles.secondQuote}/>
                        </div>
                        <div className={styles.text}>
                            <p className={styles.person}>Д. Бербатов</p>
                            <p className={styles.quoteText}>
                                Европа е симфонията на различията, съчетани със сближаването на ценностите.
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
                mainText={"Политиката в Европа е изключително разнообразна, тъй като Европа се състои от множество държави със собствени правителства и политически системи. Европейският съюз (ЕС) обаче играе ключова роля във формирането на общата политическа атмосфера на континента."}
                className={styles.sectionContainer}
                downRightImage={'/img/europe/politics.png'}
                downRightImageClass={styles.politicsImg}
            />
            <Table
                tableImg={'/img/europe/politicsTable.png'}
                className={styles.sectionContainer}
            />
            <TextWithAction
                className={`${styles.sectionContainer} ${styles.bgBlue}`}
                scribbleImg={'/img/scribble.svg'}
                hasActionBtn={true}
                actionBtnTxt={"Към списък"}
            >
                <p>
                    Европейският съюз е междуправителствена организация, съставена
                    от <b>27 европейски държави</b>, които си сътрудничат във въпроси
                    като икономика, търговия, сигурност и околна среда.
                    Той има институции, които управляват общите политики и законодателство,
                    като Европейската комисия, Европейския парламент и Съвета на Европейския съюз.
                </p>
                <br/>
                <p>
                    Европейският парламент е единственият орган, който се избира
                    директно от гражданите на ЕС и има важна роля в създаването на
                    законодателство и надзора на другите институции. Европейската
                    комисия е изпълнителен орган, който предлага ново законодателство и
                    гарантира изпълнението на вече приетите закони. Съветът на
                    Европейския съюз представлява държавите-членки и участва в
                    процеса на приемане на закони.
                </p>
                <br/>
                <p>
                    Политиката на ЕС обхваща различни области, като свободно движение
                    на хора, стоки и услуги, обща валута - еврото, сътрудничество
                    в областта на правосъдието и вътрешните работи, обща селскостопанска
                    политика, политика за околната среда и други.
                </p>
                <br/>
                <p>
                    Политическите предизвикателства, пред които Европа се изправя,
                    включват миграционния поток, изменението на климата, социалните и
                    икономическите неравенства и отношенията с глобалните играчи.
                </p>
            </TextWithAction>
            <MainTopic
                titleImage={yellowTitleCircle}
                background={"yellowBackgroundEurope"}
                hasButton={false}
                hasTitleImage={true}
                titleText={"Общество"}
                downRightImage={peopleWithPlanet}
                mainText={"Обществото в Европа е изключително разнообразно и многослойно, като обхваща множество култури, езици, религии и обичаи. Европейското общество се характеризира с богата история, дълбоки традиции и променящи се социални структури."}
                className={styles.sectionContainer}
            />
            <MainTopic
                titleImage={grayTitleCircle}
                background={"greyBackground"}
                hasButton={false}
                hasTitleImage={true}
                titleText={"Институции"}
                downRightImage={peopleWithPlanet}
                mainText={"Институциите в Европа обхващат различни организации и структури, които играят ключова роля в управлението и функционирането на Европейския съюз (ЕС). Тези институции създават, прилагат и наблюдават законодателството на ЕС, както и изпълняват други важни функции. Най-важните институции на Европейския съюз са:"}
                className={styles.sectionContainer}
            />
            <FiveInfoStickyNotes className={styles.sectionContainer}/>
            <SingleStickyNotePage
                circleImageSrc={yellowElipse}
                noteImageSrc={yellowSticky}
                noteHeight={450}
                noteWidth={600}
                noteText={"    Политическият ред в Европа:\n" +
                    "\n" +
                    "Европейският съюз: ЕС е политически и икономически съюз на 27 европейски държави, целящ да насърчи икономическото и политическо сътрудничество между своите членки. Институциите на ЕС включват Европейския парламент, Европейския съвет, Съвета на министрите, Европейската комисия и Европейския съд на правата на човека.\n" +
                    "\n" +
                    "Националните правителства: Всяка европейска държава има свои национални правителства, които се занимават с вътрешните въпроси и политики на държавата.\n" +
                    "\n" +
                    "Местните и регионални органи: Много държави в Европа са разделени на различни административни райони и области със свои местни и регионални органи."}
                className={styles.sectionContainer}
            />
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

export default Europe;