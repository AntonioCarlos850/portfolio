import styles from "./styles.module.css";
import React, { useState } from "react";

export function Header(){

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return(
        <header className={styles.headerContainer}>
            <nav className={styles.navContainer}>
                <a href="#">Home</a>
                <a href="#sobre">Sobre</a>
                <a href="#servicos">Serviços</a>
                <a href="#contatos">Contatos</a>
                <button onClick={showSidebar}  id={styles.buttonSide}>&#9776;</button>
            </nav>
            <div className={sidebar ? styles.sideBar : styles.sideBarDisable}>
                <a href="#">HOME</a>
                <a href="#sobre">SOBRE</a>
                <a href="#servicos">SERVIÇOS</a>
                <a href="#contatos">CONTATOS</a>
            </div>
        </header>
    );
}