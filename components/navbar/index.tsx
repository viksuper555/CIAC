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
                    CIAC.EU
                </div>
            </div>
            <div className={styles.toggleContainer}>
                <div className={"toggle"}>
                    <div className={"mode"}>
                    </div>
                </div>
                <div>
                    <ul className={styles.links}>
                        <ul className={styles.aboutProject}>
                            <a href={"/aboutProject"}> За проекта </a>
                            <div className={styles.aboutItems}>
                                <li><a className={styles.item} href="/resume"> Резюме </a></li>
                                <li><a className={styles.item} href="/goals">Цели </a></li>
                                <li><a className={styles.item} href="/groups">Целеви групи </a></li>
                                <li><a className={styles.item} href="/expectedResults">Очаквани резултати</a></li>
                                <li><a className={styles.item} href="/partnership">Партньорство</a></li>
                            </div>
                        </ul>
                        <ul className={styles.moduleDropdown}>
                            <a href={"/"}> Модули </a>
                            <div className={styles.dropdownItems}>
                                <li><a className={styles.item} href="/"> България</a></li>
                                <li><a className={styles.item} href="/europe">Европа</a></li>
                                <li><a className={styles.item} href="/slovenia">Словения</a></li>
                                <li><a className={styles.item} href="/westernBalkans">Западни Балкани</a></li>
                            </div>
                        </ul>
                        <li>
                            <a href={"/materials"}> Национален Опит </a>
                        </li>
                        <li>
                            <a href={"/Handbook"}> Ресурси </a>
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