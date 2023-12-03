import React, {FC, useState} from 'react';
import logo from '../../public/img/bulgaria/logo.png';
import Image from 'next/image';
import styles from './navbar.module.scss';
import LangSwitcher from "@/components/ui/langSwitcher";
import {getTexts} from "@/contexts/LanguageContext";

interface Props {
    changeTheme?: any;
    currentTheme?: string;
    className?: string;
}

const Navbar:FC<Props> = ({changeTheme, currentTheme, className}: Props) => {
    const {texts: {components: texts}, locale} = getTexts();

    return (
        <nav className={`${styles.nav} ${className}`}>
            <img src={'./img/navbarIcon.png'} height={300} className={styles.navbarIcon}/>
            <div className={styles.navItems}>
                <div className={styles.brand}> CIAC.EU</div>
                <div className={"flex justify-end w-full"}>
                    <ul className={styles.links}>
                        <ul className={styles.aboutProject}>
                            <a href={"/aboutProject"}> {texts.aboutProject} </a>
                            <div className={styles.aboutItems}>
                                <li><a className={styles.item} href="/resume"> {texts.resume} </a></li>
                                <li><a className={styles.item} href="/goals">{texts.goals} </a></li>
                                <li><a className={styles.item} href="/groups">{texts.targetGroups} </a></li>
                                <li><a className={styles.item} href="/expectedResults"> {texts.expectedResults}</a></li>
                                <li><a className={styles.item} href="/partnership">{texts.partnership}</a></li>
                            </div>
                        </ul>
                        <ul className={styles.moduleDropdown}>
                            <a href={"/"}> {texts.modules} </a>
                            <div className={styles.dropdownItems}>
                                <li><a className={styles.item} href="/"> {texts.bulgaria}</a></li>
                                <li><a className={styles.item} href="/europe">{texts.europe}</a></li>
                                <li><a className={styles.item} href="/slovenia">{texts.slovenia}</a></li>
                                <li><a className={styles.item} href="/westernBalkans">{texts.westernBalkans}</a></li>
                            </div>
                        </ul>
                        <li>
                            <a href={"/materials"}> {texts.nationalExperience} </a>
                        </li>
                        <ul className={styles.resources}>
                            <a href={"/handbook"}> {texts.resources} </a>
                            <div className={styles.resourceItems}>
                                <li><a className={styles.item} href="/handbook"> Handbook</a></li>
                                <li><a className={styles.item} href="/methodology"> Study Methodology</a></li>
                            </div>
                        </ul>
                        <LangSwitcher/>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar