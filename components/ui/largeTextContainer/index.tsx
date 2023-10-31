import styles from './largeTextContainer.module.scss'
import {FC} from "react";
import "../../../app/globals.scss";

interface Props {
    text: string;
    imgSrc: string;
}
const LargeTextContainer:FC<Props> = ({text, imgSrc}) => {

    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                Проект „Творчество и иновации за активно гражданство” (Creativity and Innovation for Active Citizenship - CIAC) се осъществява от три партньорски организации, в две държави - България и Словения с финансовата подкрепа на Програма „Еразъм+“, Ключова дейност 2: Стратегически партньорства. В рамките на това ключово действие се осъществяват дейности, насочени към постигане на приоритетите на програмата и генериране на дълготрайни положителни въздействия. Очаква се, че резултатите от този процес ще доведат до разработване, прехвърляне и внедряване на иновативни практики на различни равнища, включително организационно, местно, регионално, национално и европейско равнище.
                Проектът се насочва към насърчаване на активното участие на младите хора в демократичния и гражданския живот в Европа. Чрез създаване на иновативни продукти, включително анализ и доклади за младежката ангажираност, методология за изследване на младежката ангажираност, наръчник с насоки и електронни модули за обучение, проектът се стреми да задълбочи и разшири политическото и социално участие на младежите от местно до европейско ниво. Целевата аудитория включва младежи на възраст 15-29 години, младежки работници, учители и обучители от неформалния сектор.
                Иновативното допълнение към нашата обучителна платформа е интеграцията на чатбота ChatGPT, разработен от OpenAI. Този изключително мощен инструмент предоставя нови възможности и представлява истинска революция в света на информационните технологии.
                ChatGPT е наистина популярен сред младите хора и стана част от тяхното ежедневие. Интегрирането му в нашата обучителна платформа има за цел да предостави на младежите възможността да го използват за бърз достъп до информация свързана с гражданската активност, гражданските им права или участие в обществени инициативи,
                Проектът насърчава гражданската ангажираност и сътрудничество, като поставя младежите в центъра на демократичния процес. Разработените електронни модули за обучение, в комбинация с Чатбота ще им предоставят актуална информация и подкрепа по всички тези важни теми.
            </div>
            <div className={styles.imgContainer}>
                <img src={imgSrc}/>
            </div>
        </div>
    )
}

export default LargeTextContainer