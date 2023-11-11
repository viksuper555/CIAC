"use client";
import "../../app/globals.scss";
import StartingModule from "@/components/startingModule";
import styles from "./westernBalkans.module.scss";
import ContentReview from "@/components/contentReview";
import infoContent from "@/public/img/bulgaria/infoContent.png";
import MainTopic from "@/components/mainTopic";
import React, {useEffect, useState} from "react";
import yellowTitleCircle from "../../public/img/europe/yellowTitleCircle.png"
import {Table} from "@/components/table";
import tealTitleCircle from "../../public/img/westernBalkans/tealTitleCircle.png"
import wBSociety from "../../public/img/westernBalkans/westernBalkanSociety.png"
import {TextWithAction} from "@/components/textWithAction";
import grayTitleCircle from "../../public/img/bulgaria/grayTitleCircle.png";
import wbInstitutions from "../../public/img/westernBalkans/wbInstitutions.png"
import FiveInfoStickyNotes from "@/components/fiveInfoStickyNotes";
import infoPagesWB from "../../public/img/westernBalkans/infoPagesWB.png"
import Exam from "@/components/exam";
import civilianEducationWB from "../../public/img/westernBalkans/civilianEducationWB.png"
import contentReview3 from "../../public/img/westernBalkans/content3Wb-bg.png"
import activeCitizen from "../../public/img/westernBalkans/activeCitizen.png"
import wbInstruments from "../../public/img/westernBalkans/wbInstruments.png"
import wbDocuments from "../../public/img/westernBalkans/wbInstruments.png"
import {getTexts} from "@/contexts/LanguageContext";
import parse from "html-react-parser";

const WesternBalkans = () => {
    const [theme, setTheme] = useState("dark");
    const {texts: {WesternBalkans: texts}, locale} = getTexts();
    const [ytLink, setYtLink] = useState<any>()

    useEffect(() => {
        switch (locale) {
            case 'bg': {
                setYtLink(
                    <iframe width="900" height="715" src="https://www.youtube.com/embed/JKBhj7D9s0A"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen></iframe>
                );
                return;
            }
            case 'eng': {
                setYtLink(
                    <iframe width="900" height="715" src="https://www.youtube.com/embed/KLT5o4aA_T0"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen></iframe>
                )
                return
            }
            case 'slo': {
                setYtLink(
                    <iframe width="900" height="715" src="https://www.youtube.com/embed/Bk6cd8Lbn-Y"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen></iframe>
                )
                return;
            }
        }
    }, [locale]);

    return <div className={"h-full"}>
        <StartingModule moduleText={texts.M1_title} commaImage={'/img/yellowComma.png'}
                        moduleBackgroundColor={styles.yellowBg} className={styles.sectionContainer}/>
        <div className={`${styles.quotesContainer} ${styles.sectionContainer}`}>
            <div className={`${styles.quotesRow}`}>
                <div className={styles.quoteMerkel}>
                    <div className={styles.doubleQuoteMerkel}>
                        <img src={'/img/europe/quote_blue.svg'} className={styles.firstQuote}/>
                        <img src={'/img/europe/quote_blue.svg'} className={styles.secondQuote}/>
                    </div>
                    <div className={styles.text}>
                        <p className={styles.person}>{texts.M1_topic1_quotes[0]}</p>
                        <p className={styles.quoteText}>
                            {texts.M1_topic1_quotes[1]}
                        </p>
                    </div>
                </div>

                <div className={styles.quoteKenedy}>
                    <div className={styles.doubleQuoteKenedy}>
                        <img src={'/img/europe/quote_gray.svg'} className={styles.firstQuote}/>
                        <img src={'/img/europe/quote_gray.svg'} className={styles.secondQuote}/>
                    </div>
                    <div className={styles.text}>
                        <p className={styles.person}>{texts.M1_topic1_quotes[2]}</p>
                        <p className={styles.quoteText}>
                            {texts.M1_topic1_quotes[3]}
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
                        <p className={styles.person}>{texts.M1_topic1_quotes[4]}</p>
                        <p className={styles.quoteText}>
                            {texts.M1_topic1_quotes[5]}
                        </p>
                    </div>
                </div>

                <div className={styles.quoteBerbatov}>
                    <div className={styles.doubleQuoteBerbatov}>
                        <img src={'/img/europe/quote_darkblue.svg'} className={styles.firstQuote}/>
                        <img src={'/img/europe/quote_darkblue.svg'} className={styles.secondQuote}/>
                    </div>
                    <div className={styles.text}>
                        <p className={styles.person}>{texts.M1_topic1_quotes[6]}</p>
                        <p className={styles.quoteText}>
                            {texts.M1_topic1_quotes[7]}
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <ContentReview
            heading={texts.Content_heading}
            contentImage={`./img/infoContent-${locale}.png`}
            background={styles.yellowText}
            className={styles.sectionContainer}
        />
        <div
            id={"eu-for-citizens-3"}
            className={`grayBackground ${styles.sectionContainer}`}
        >
            <p className={styles.textForVideo}>{texts.textForVideo}</p>
            <div className={styles.videoContainer}>
                {ytLink}
            </div>
        </div>
        <MainTopic
            titleImage={yellowTitleCircle}
            background={styles.yellowBackground}
            hasButton={true}
            hasTitleImage={true}
            className={styles.sectionContainer}
            titleText={texts.M1_topic1}
            mainText={texts.M1_topic1_text}
        />
        <Table
            tableImg={`/img/westernBalkans/westernBalkansTable-${locale}.png`}
            className={`${styles.sectionContainer} ${styles.yellowBg}`}
        />
        <MainTopic
            titleImage={tealTitleCircle}
            background={styles.tealBackground}
            hasButton={true}
            hasTitleImage={true}
            className={styles.sectionContainer}
            titleText={texts.M1_topic3}
            downRightImage={wBSociety}
            mainText={texts.M1_topic3_text}
        />
        <TextWithAction
            className={`${styles.sectionContainer} ${styles.tealBackground}`}
            scribbleImg={'/img/westernBalkans/tealScribble.svg'}
            hasActionBtn={false}
            actionBtnTxt={texts.M1_topic4_button}
        >
            {parse(texts.M1_topic4_text)}
        </TextWithAction>
        <MainTopic
            titleImage={grayTitleCircle}
            background={styles.whiteBackground}
            hasButton={true}
            hasTitleImage={true}
            className={styles.sectionContainer}
            titleText={texts.M1_topic5}
            downRightImage={wbInstitutions}
            mainText={texts.M1_topic5_text}
        />
        <FiveInfoStickyNotes
            className={`${styles.whiteBackground} ${styles.sectionContainer}`}
            text1={parse(texts.M1_topic6_texts[0]) as string}
            text2={parse(texts.M1_topic6_texts[1]) as string}
            text3={parse(texts.M1_topic6_texts[2]) as string}
            text4={parse(texts.M1_topic6_texts[3]) as string}
            text5={parse(texts.M1_topic6_texts[4]) as string}
        />
        <MainTopic
            titleImage={yellowTitleCircle}
            background={styles.yellowBg}
            hasButton={true}
            hasTitleImage={true}
            className={styles.sectionContainer}
            titleText={texts.M1_topic7}
            downRightImage={infoPagesWB}
            mainText={texts.M1_topic7_text}
        />
        <div
            id={"media-advice"}
            className={`${styles.yellowBg} ${styles.sectionContainer} ${styles.mediaAdviceContainer}`}
        >
            <div className={styles.MAInner}>
                {parse(texts.M1_topic8_text)}
                <img src={'/img/sparkle-yellow.svg'} className={styles.MASparkle}/>
            </div>
        </div>
        <Exam
            id={"exam-europe-module-2"}
            titleImage={yellowTitleCircle} background={styles.sectionContainer}
            className={`${styles.yellowBackground} ${styles.sectionContainer}`}
            scribbleImg={'/img/scribble-yellow.svg'}
            scribbleImgClass={styles.IAScribble}
            btnClass={styles.IABtnClass}
            titleClass={styles.IATestTitle}
        />
        <StartingModule moduleBackgroundColor={styles.tealBackground} moduleText={texts.M2_title}
                        commaImage={'/img/tealComma.svg'}
        className={styles.sectionContainer}/>
        <div className={`${styles.contentsModule2Container} ${styles.sectionContainer}`}>
            <div className={styles.contentsModule2Title}>{texts.Content_heading}</div>
            <img src={`./img/contentReview2-${locale}.png`}className={styles.contentsModule2}/>
        </div>
        <MainTopic
            titleImage={grayTitleCircle}
            background={styles.whiteBackground}
            hasButton={true}
            hasTitleImage={true}
            className={styles.sectionContainer}
            titleText={texts.M2_topic3}
            downRightImage={civilianEducationWB}
            mainText={texts.M2_topic3_text}
        />

        <div
            id={"civilian-edu"}
            className={`${styles.whiteBackground} ${styles.sectionContainer} ${styles.mediaAdviceContainer}`}
        >
            <div className={`${styles.whiteBackground} ${styles.sectionContainer} ${styles.mediaAdviceContainer}`}>
                <div className={styles.MAInner}>
                    {parse(texts.M2_topic4_text)}
                    <img src={'/img/westernBalkans/tealSparkle.svg'} className={styles.maSparkleDownRight}/>
                </div>
            </div>
        </div>
        <MainTopic
            id={"youth-engagement"}
            titleImage={yellowTitleCircle}
            background={"blueBackground"}
            hasButton={false}
            hasTitleImage={true}
            titleText={texts.M2_topic5}
            mainText={texts.M2_topic5_text}
            className={`${styles.sectionContainer} ${styles.youthEngagement} ${styles.yellowBackground}`}
            btnClass={styles.btnYouthEngagement}
            btnText={texts.M2_topic5_button}
            downRightImage={'/img/westernBalkans/youthactivityWb.png'}
        />
        <TextWithAction
            className={`${styles.sectionContainer} ${styles.yellowBackground}`}
            scribbleImg={'/img/scribble-yellow.svg'}
            hasActionBtn={false}
        >
            {parse(texts.M2_topic6_text)}
        </TextWithAction>
        <MainTopic
            id={"youth-engagement"}
            titleImage={tealTitleCircle}
            background={styles.tealBackground}
            hasButton={false}
            hasTitleImage={true}
            titleText={texts.M2_topic7}
            mainText={texts.M2_topic7_text}
            className={`${styles.sectionContainer} ${styles.youthEngagement} ${styles.yellowBackground}`}
            btnClass={styles.btnYouthEngagement}
            downRightImage={'/img/westernBalkans/youthactivityWb.png'}
        />
        <div id={"YE-examples"} className={`${styles.citizenAwarenessExamplesContainer} ${styles.sectionContainer}`}>
            <div className={styles.CANotes}>
                <div className={styles.CAFirstRow}>
                    <div className={styles.stickyNoteContainerGreen}>
                        <div className={styles.CAStickyNotePinGreen}/>
                        <div className={styles.YEStickyNoteText}>
                            {parse(texts.M2_topic8_texts[0])}
                        </div>
                    </div>

                    <div className={styles.stickyNoteContainerYellow}>
                        <div className={styles.CAStickyNotePinYellow}/>
                        <div className={styles.YEStickyNoteText}>
                            {parse(texts.M2_topic8_texts[1])}
                        </div>
                    </div>

                    <div className={styles.stickyNoteContainerGreen}>
                        <div className={styles.CAStickyNotePinGreen}/>
                        <div className={styles.YEStickyNoteText}>
                            {parse(texts.M2_topic8_texts[2])}
                        </div>
                    </div>
                </div>
                <div className={styles.CASecondRow}>
                    <div className={styles.stickyNoteContainerYellow}>
                        <div className={styles.CAStickyNotePinYellow}/>
                        <div className={styles.YEStickyNoteText}>
                            {parse(texts.M2_topic8_texts[3])}
                        </div>
                    </div>

                    <div className={styles.stickyNoteContainerYellow}>
                        <div className={styles.CAStickyNotePinYellow}/>
                        <div className={styles.YEStickyNoteText}>
                            {parse(texts.M2_topic8_texts[4])}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <MainTopic
            id={"youth-engagement-opportunities"}
            titleImage={grayTitleCircle}
            background={styles.whiteBackground}
            hasButton={true}
            hasTitleImage={true}
            titleText={texts.M2_topic9}
            mainText={texts.M2_topic9_text}
            className={`${styles.sectionContainer} ${styles.youthEngagement} ${styles.yellowBackground}`}
            btnClass={styles.btnYouthEngagement}
            downRightImage={'/img/westernBalkans/youthactivityWb.png'}
        />
        <div
            id={"list-of-opportunities"}
            className={`${styles.whiteBackground} ${styles.sectionContainer} ${styles.mediaAdviceContainer}`}
        >
            <div className={styles.MAInner}>
                {parse(texts.M2_topic10_texts[0])}
                <img src={'/img/sparkle.svg'} className={styles.MASparkle}/>
            </div>
        </div>
        <div
            id={"opportunities-2"}
            className={`${styles.whiteBackground} ${styles.sectionContainer} ${styles.mediaAdviceContainer}`}
        >
            <div className={styles.MAInner}>
                {parse(texts.M2_topic10_texts[1])}
                <img src={'/img/sparkle.svg'} className={styles.MASparkle}/>
            </div>
        </div>
        <MainTopic
            id={"youth-engagement-opportunities"}
            titleImage={yellowTitleCircle}
            background={styles.yellowBackground}
            hasButton={false}
            hasTitleImage={true}
            titleText={texts.M2_topic11}
            mainText={texts.M2_topic11_text}
            className={`${styles.sectionContainer} ${styles.youthEngagement} ${styles.yellowBackground}`}
            btnClass={styles.btnYouthEngagement}
            downRightImage={'/img/westernBalkans/falseNewsWb.png'}
        />
        <div
            id={"media-false-news"}
            className={`${styles.yellowBackground} ${styles.sectionContainer} ${styles.mediaAdviceContainer}`}
        >
            <div className={styles.MAInner}>
                {parse(texts.M2_topic12_texts[0])}
            </div>
        </div>
        <div
            id={"media-false-news"}
            className={`${styles.yellowBackground} ${styles.sectionContainer} ${styles.mediaAdviceContainer}`}
        >
            <div className={styles.MAInner}>
                {parse(texts.M2_topic12_texts[1])}
            </div>
        </div>
        <MainTopic
            id={"youth-engagement-opportunities"}
            titleImage={tealTitleCircle}
            background={styles.tealBackground}
            hasButton={false}
            hasTitleImage={true}
            titleText={texts.M2_topic13}
            mainText={texts.M2_topic13_text}
            className={`${styles.sectionContainer} ${styles.youthEngagement} ${styles.yellowBackground}`}
            btnClass={styles.btnYouthEngagement}
            downRightImage={'/img/westernBalkans/falseNewsWb.png'}
        />
        <div id={"YE-examples"} className={`${styles.citizenAwarenessExamplesContainer} ${styles.sectionContainer}`}>
            <div className={styles.CANotes}>
                <div className={styles.CAFirstRow}>
                    <div className={styles.stickyNoteContainerGreen}>
                        <div className={styles.CAStickyNotePinGreen}/>
                        <div className={styles.YEStickyNoteText}>
                            {parse(texts.M2_topic14_texts[0])}
                        </div>
                    </div>

                    <div className={styles.stickyNoteContainerYellow}>
                        <div className={styles.CAStickyNotePinYellow}/>
                        <div className={styles.YEStickyNoteText}>
                            {parse(texts.M2_topic14_texts[1])}
                        </div>
                    </div>

                    <div className={styles.stickyNoteContainerGreen}>
                        <div className={styles.CAStickyNotePinGreen}/>
                        <div className={styles.YEStickyNoteText}>
                            {parse(texts.M2_topic14_texts[2])}
                        </div>
                    </div>
                </div>
                <div className={styles.CASecondRow}>
                    <div className={styles.stickyNoteContainerYellow}>
                        <div className={styles.CAStickyNotePinYellow}/>
                        <div className={styles.YEStickyNoteText}>
                            {parse(texts.M2_topic14_texts[3])}
                        </div>
                    </div>

                    <div className={styles.stickyNoteContainerGreen}>
                        <div className={styles.CAStickyNotePinGreen}/>
                        <div className={styles.YEStickyNoteText}>
                            {parse(texts.M2_topic14_texts[4])}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <TextWithAction
            className={`${styles.sectionContainer} ${styles.tealBackground}`}
            scribbleImg={'/img/scribble.svg'}
            hasActionBtn={false}
        >
            {parse(texts.M2_topic15_text)}
            {/* <img
                    src={"/img/europe/youthEngagement.png"}
                    className={styles.youthEngagementImg}
                /> */}
        </TextWithAction>
        <Exam
            titleImage={tealTitleCircle}
            background={styles.tealBackground}
            className={styles.sectionContainer}
            scribbleImg={'/img/westernBalkans/tealScribble.svg'}
            btnClass={styles.tealBtnClass}
        />
        <StartingModule
            moduleBackgroundColor={styles.whiteBackground}
            moduleText={texts.M3_title}
            commaImage={'/img/grayComma.svg'}
            className={styles.sectionContainer}
        />
        <ContentReview
            heading={texts.Content_heading}
            contentImage={`/img/westernBalkans/content3Wb-${locale}.png`}
            background={styles.whiteBackground}
            className={styles.sectionContainer}
        />
        <MainTopic
            id={"youth-engagement-opportunities"}
            titleImage={yellowTitleCircle}
            background={styles.yellowBackground}
            hasButton={false}
            hasTitleImage={true}
            titleText={texts.M3_topic3}
            mainText={texts.M3_topic3_text}
            className={`${styles.sectionContainer} ${styles.youthEngagement} ${styles.yellowBackground}`}
            btnClass={styles.btnYouthEngagement}
            downRightImage={'/img/westernBalkans/falseNewsWb.png'}
        />
        <div
            id={"life-wb"}
            className={`${styles.yellowBg} ${styles.sectionContainer} ${styles.mediaAdviceContainer}`}
        >
            <div className={styles.MAInner}>
                {parse(texts.M3_topic4_texts[0])}
                <img src={'/img/sparkle.svg'} className={styles.MASparkleWb}/>
            </div>
        </div>
        <div
            id={"life-wb-2"}
            className={`${styles.yellowBg} ${styles.sectionContainer} ${styles.mediaAdviceContainer}`}
        >
            <div className={styles.MAInner}>
                {parse(texts.M3_topic4_texts[1])}
                <img src={'/img/sparkle-yellow.svg'} className={styles.MASparkleWb}/>
                <img src={'/img/sparkle-yellow.svg'} className={styles.maSparkleDownLeft}/>
            </div>
        </div>
        <MainTopic
            id={"active-citizen "}
            titleImage={tealTitleCircle}
            background={styles.tealBackground}
            hasButton={true}
            hasTitleImage={true}
            titleText={texts.M3_topic5}
            mainText={texts.M3_topic5_text}
            className={`${styles.sectionContainer} ${styles.youthEngagement}`}
            btnClass={styles.btnYouthEngagement}
            downRightImage={activeCitizen}
        />
        <div
            id={"active-citizen-wb-2"}
            className={`${styles.tealBackground} ${styles.sectionContainer} ${styles.mediaAdviceContainer}`}
        >
            <div className={styles.MAInner}>
                {parse(texts.M3_topic6_text)}
            </div>
        </div>
        <MainTopic
            id={"wb-for-citizens"}
            titleImage={grayTitleCircle}
            background={styles.whiteBackground}
            hasButton={true}
            hasTitleImage={true}
            titleText={texts.M3_topic7}
            mainText={texts.M3_topic7_text}
            className={`${styles.sectionContainer} ${styles.youthEngagement}`}
            btnClass={styles.yellowText}
            downRightImage={activeCitizen}
        />
        <div
            id={"wb-for-citizen-2"}
            className={`${styles.whiteBackground} ${styles.sectionContainer} ${styles.mediaAdviceContainer}`}
        >
            <div className={styles.MAInner}>
                {parse(texts.M3_topic8_texts[0])}
                <img src={'/img/greyScribble.svg'} className={styles.topLeftScribbleWb}/>
            </div>
        </div>

        <div
            id={"wb-for-citizen-2"}
            className={`${styles.whiteBackground} ${styles.sectionContainer} ${styles.mediaAdviceContainer}`}
        >
            <div className={styles.MAInner}>
                {parse(texts.M3_topic8_texts[1])}
                <img src={'/img/greyScribble.svg'} className={styles.maSparkleDownRight}/>
            </div>
        </div>
        <MainTopic
            id={"wb-instruments"}
            titleImage={yellowTitleCircle}
            background={styles.yellowBackground}
            hasButton={true}
            hasTitleImage={true}
            titleText={texts.M3_topic9}
            mainText={texts.M3_topic9_text}
            className={`${styles.sectionContainer} ${styles.youthEngagement}`}
            btnClass={styles.yellowText}
            downRightImage={wbInstruments}
        />

        <div
            id={"wb-instruments-2"}
            className={`${styles.yellowBackground} ${styles.sectionContainer} ${styles.mediaAdviceContainer}`}
        >
            <div className={styles.MAInner}>
                {parse(texts.M3_topic10_text)}
                <img src={'/img/scribble-yellow.svg'} className={styles.maSparkleDownRight}/>
            </div>
        </div>
        <MainTopic
            id={"wb-documents-publications"}
            titleImage={tealTitleCircle}
            background={styles.tealBackground}
            hasButton={true}
            hasTitleImage={true}
            titleText={texts.M3_topic11}
            mainText={texts.M3_topic11_text}
            className={`${styles.sectionContainer} ${styles.youthEngagement}`}
            btnClass={styles.tealBtnClass}
            downRightImage={wbDocuments}
        />
        <div id={"YE-examples"} className={`${styles.citizenAwarenessExamplesContainer} ${styles.sectionContainer}`}>
            <div className={styles.CANotes}>
                <div className={styles.CAFirstRow}>
                    <div className={styles.stickyNoteContainerGreen}>
                        <div className={styles.CAStickyNotePinGreen}/>
                        <div className={styles.YEStickyNoteText}>
                            {parse(texts.M3_topic12_texts[0])}
                        </div>
                    </div>

                    <div className={styles.stickyNoteContainerYellow}>
                        <div className={styles.CAStickyNotePinYellow}/>
                        <div className={styles.YEStickyNoteText}>
                            {parse(texts.M3_topic12_texts[1])}
                        </div>
                    </div>

                    <div className={styles.stickyNoteContainerGreen}>
                        <div className={styles.CAStickyNotePinGreen}/>
                        <div className={styles.YEStickyNoteText}>
                            {parse(texts.M3_topic12_texts[2])}
                        </div>
                    </div>
                </div>
                <div className={styles.CASecondRow}>
                    <div className={styles.stickyNoteContainerYellow}>
                        <div className={styles.CAStickyNotePinYellow}/>
                        <div className={styles.YEStickyNoteText}>
                            {parse(texts.M3_topic12_texts[3])}
                        </div>
                    </div>

                    <div className={styles.stickyNoteContainerGreen}>
                        <div className={styles.CAStickyNotePinGreen}/>
                        <div className={styles.YEStickyNoteText}>
                            {parse(texts.M3_topic12_texts[4])}
                        </div>
                    </div>

                    <div className={styles.stickyNoteContainerYellow}>
                        <div className={styles.CAStickyNotePinYellow}/>
                        <div className={styles.YEStickyNoteText}>
                            {parse(texts.M3_topic12_texts[5])}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Exam
            id={"exam-europe-module-3"}
            titleImage={tealTitleCircle} background={styles.sectionContainer}
            className={`${styles.tealBackground} ${styles.sectionContainer}`}
            scribbleImg={'/img/westernBalkans/tealScribble.svg'}
            scribbleImgClass={styles.IAScribble}
            btnClass={styles.tealBtnClass}
            titleClass={styles.IATestTitle}
        />
    </div>
}

export default WesternBalkans;