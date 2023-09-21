import styles from './topLeftImage.module.scss';
import leftMagnifyingGlass from "../../public/img/bulgaria/leftMagnefyingGlass.png";
import Image from "next/image";
import scribble from "../../public/img/bulgaria/Scribble.png"

const TopLeftImage = () => {
    return (
        <div className={styles.container}>
            <div>
                <div className={""}>
                    <Image src={leftMagnifyingGlass} alt={"magnefinyGlass"} className={"absolute"}/>
                    <div className={"flex pl-[20%] pt-[10%]"}>
                        <span className={styles.title}>
                            Основи в политиката
                        </span>
                    </div>
                    <div className={styles.textContainer}>
                        <Image src={scribble} alt={"scribbl"} className={styles.scribble}/>
                        <div className={`${styles.text}`}>
                            Демокрация и правова държава: България се стреми към утвърждаването на демократични принципи, включително свободните и редовните избори, зачитане на правата на човека и основните свободи, принципа на правовата държава и независимостта на съдебната система.
                        </div>
                        <div className={styles.text}>
                            Европейска интеграция: България е член на Европейския съюз (от 2007 г.) и активно подкрепя европейската интеграция и принципите на общността. Държавата работи за съгласуване на своите законодателство и политики с европейските стандарти и ценности.
                        </div>
                        <div className={styles.text}>
                            Икономически развитие: България преследва целта за устойчиво икономическо развитие, създаване на благосъстояние и подобряване на жизнения стандарт на гражданите. Политиките включват насърчаване на предприемачеството, привличане на инвестиции, модернизация на инфраструктурата, подкрепа на малките и средните предприятия и развитие на иновациите.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopLeftImage