import React, {FC, useState} from 'react';
import logo from '../../public/bulgaria/logo.png';
import Image from 'next/image';
import styles from './navbar.module.scss';

interface Props {
    changeTheme?: any;
    currentTheme?: string;
}

const Navbar:FC<Props> = ({changeTheme, currentTheme}: Props) => {

    return (
        <nav className={styles.nav}>
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
                        <li>
                            <a href={"#"}> Модули </a>
                        </li>
                        <li>
                            <a href={"/Launch"}> Екип </a>
                        </li>
                        <li>
                            <a href={"/"}> Контакти </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar