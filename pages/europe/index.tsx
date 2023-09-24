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
            <div className={`${styles.bgBlue} ${styles.sectionContainer} ${styles.countriesListContainer}`} id={"countries-list"}>
                <div className={styles.countriesListTitle}>
                    Списък с 27-те държави - членки на Европейския съюз.
                    <img src={'/img/sparkle.svg'} className={styles.sparkle}/>
                </div>
                <div className={styles.countriesList}>
                    <div className={styles.coutriesLeftList}>
                        1. Австрия (Österreich)<br/>
                        2. Белгия (België/Belgique)<br/>
                        3. България (България)<br/>
                        4. Гърция (Ελλάδα)<br/>
                        5. Германия (Deutschland)<br/>
                        6. Дания (Danmark)<br/>
                        7. Естония (Eesti)<br/>
                        8. Ирландия (Ireland)<br/>
                        9. Испания (España)<br/>
                        10. Италия (Italia)<br/>
                        11. Кипър (Κύπρος/Kıbrıs)<br/>
                        12. Латвия (Latvija)<br/>
                        13. Литва (Lietuva)<br/>
                        14. Люксембург (Luxembourg)<br/>
                    </div>
                    <div className={styles.coutriesRightList}>
                        15. Малта (Malta)<br/>
                        16. Полша (Polska)<br/>
                        17. Португалия (Portugal)<br/>
                        18. Румъния (România)<br/>
                        19. Словакия (Slovensko)<br/>
                        20. Словения (Slovenija)<br/>
                        21. Унгария (Magyarország)<br/>
                        22. Финландия (Suomi/Finland)<br/>
                        23. Франция (France)<br/>
                        24. Холандия (Nederland)<br/>
                        25. Хърватска (Hrvatska)<br/>
                        26. Чехия (Česko)<br/>
                        27. Швеция (Sverige)<br/>
                    </div>
                </div>
            </div>
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
            <FiveInfoStickyNotes
                className={styles.sectionContainer}
                text1={"1. Европейски парламент: Европейският парламент е единственият орган на ЕС, който се избира директно от гражданите на държавите-членки. Той представлява интересите на гражданите и участва в създаването на ново законодателство на ЕС. Парламентът участва и в одобрението на бюджета на ЕС и осъществява надзор над другите институции."}
                text2={"2. Европейска комисия: Европейската комисия е изпълнителният орган на ЕС. Тя предлага ново законодателство и осъществява надзор над изпълнението на законите на ЕС. Комисията също така представлява ЕС на международната сцена и участва в преговори с други държави и организации."}
                text3={"3. Съвет на Европейския съюз: Съветът е органът, представляващ държавите-членки на ЕС. Той участва в процеса на приемане на закони и координира политиките на държавите-членки. Съветът също така играе важна роля в определянето на общите стратегии на ЕС по различни въпроси."}
                text4={"4. Европейският съд на правата на човека: Това е независим съдебен орган, който осигурява спазването на законите на ЕС и решава спорове между държавите-членки и институциите на ЕС. Съдът също така разглежда жалби от граждани и компании относно нарушения на техните права или законните правила на ЕС."}
                text5={"5. Европейската централна банка (ЕЦБ): ЕЦБ е отговорна за монетарната политика на еврозоната, която е групата от държави в ЕС, използващи общата валута - еврото. Тя контролира възможностите за издаване на пари, провежда валутни операции и следи инфлацията и икономическото развитие в региона."}
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
            <div
                id={"sticky-note-one"}
                className={`${styles.sectionContainer} ${styles.bgBlue} ${styles.singleStickyNoteContainer}`}
            >
                <div className={styles.singleStickyNote}>
                    <div className={styles.stickyNotePinBlue}/>
                    1. Избори за Европейския парламент: Гражданите имат право да
                    избират членове на Европейския парламент, които представляват
                    техните интереси и гласуват по важни въпроси на европейско ниво. <br/><br/>

                    2. Европейски граждански инициативи: Гражданите на ЕС могат
                    да инициират петиции с определен брой подписи, с които да
                    предложат ново законодателство или изменения към съществуващи закони.<br/><br/>

                    3. Граждански организации: В Европа съществуват множество
                    граждански организации, които се занимават с различни теми -
                    от правата на човека и околната среда до образование и здравеопазване.
                </div>
            </div>
            <div
                id={"sticky-note-two"}
                className={`${styles.sectionContainer} ${styles.bgBlue} ${styles.singleStickyNoteContainer}`}
            >
                <div className={styles.singleStickyNoteSecond}>
                    <div className={styles.stickyNotePinYellow}/>
                    4. Местни участници и обществени консултации: Някои държави
                    са насърчавали участието на гражданите чрез местни обществени
                    консултации и директни диалози с местните власти.<br/><br/>

                    5. Гласуване и референдуми: Гражданите имат възможност да участват
                    в национални и регионални избори, както и в референдуми по важни въпроси.<br/><br/>

                    6. Цивилно общество и социални медии: Гражданите използват
                    социалните медии и други онлайн платформи, за да изразят своите
                    мнения и да участват в обществени дебати.
                    <img
                        src={'/img/europe/informed-woman.png'}
                        className={styles.informedWoman}
                    />
                </div>
            </div>
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
                id={"exam-europe-module-1"}
                titleImage={blueTitleCircle} background={"blueBackground"}
                className={styles.sectionContainer}
            />
            <div className={`${styles.contentsModule2Container} ${styles.sectionContainer}`}>
                <div className={styles.contentsModule2Title}>СЪДЪРЖАНИЕ</div>
                <img src={'/img/contents2.png'} className={styles.contentsModule2}/>
            </div>
            <ContentReview
                contentImage={infoContent} background={"yellowBackgroundEurope"}
                className={styles.sectionContainer}
            />
        </div>
    );
};

export default Europe;