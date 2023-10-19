import React, {FC, useState} from 'react';
import logo from '../../public/img/bulgaria/logo.png';
import Image from 'next/image';
import styles from './navbar.module.scss';
import LangSwitcher from "@/components/ui/langSwitcher";

interface Props {
    changeTheme?: any;
    currentTheme?: string;
    className?: string;
}

const Navbar:FC<Props> = ({changeTheme, currentTheme, className}: Props) => {

    return (
        <nav className={`${styles.nav} ${className}`}>
            <div>
                <div className={styles.brand}>
                    <Image src={logo} alt={"logo"}/>
                </div>
            </div>
            <div className={styles.toggleContainer}>
                <div className={"toggle"}>
                    <div className={"mode"}>
                    </div>
                </div>
                <div>
                    <ul className={styles.links}>
                        <li>
                            <a href={"#"}> За Нас </a>
                        </li>
                        <ul className={styles.moduleDropdown}>
                            <a href={"/modules"}> Модули </a>
                            <div className={styles.dropdownItems}>
                                <li><a href="/"> България</a></li>
                                <li><a href="/europe">Европа</a></li>
                                <li><a href="/slovenia">Словения</a></li>
                                <li><a href="/westernBalkans">Западни Балкани</a></li>
                            </div>
                        </ul>
                        <li>
                            <a href={"/materials"}> Национален Опит </a>
                        </li>
                        <li>
                            <a href={"/Launch"}> Екип </a>
                        </li>
                        <li>
                            <a href={"/"}> Контакти </a>
                        </li>
                        <LangSwitcher/>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar