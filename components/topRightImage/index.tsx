import styles from './topRightImage.module.scss';
import leftMagnifyingGlass from "../../public/bulgaria/leftMagnefyingGlass.png";
import Image from "next/image";
import scribble from "../../public/bulgaria/Scribble.png"
import RedirectButton from "@/components/ui/readMoreBtn";

const TopRightImage = () => {
    return (
        <div className={styles.container}>
            <div>
                <div className={""}>
                    <div className={styles.glassContainer}>
                        <Image src={leftMagnifyingGlass} alt={"magnefinyGlass"} className={styles.magnifyingGlass}/>
                    </div>
                    <div className={"flex pl-[40%] pt-[10%]"}>
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
                        <RedirectButton/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopRightImage