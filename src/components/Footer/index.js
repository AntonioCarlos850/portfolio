import styles from "./styles.module.css";

export function Footer(){
    return(
        <footer className={styles.footer}>
            <div className={styles.flex}>
                <span>
                    © Todos os Diretos Reservados - Antonio Carlos da Silva Junior
                </span>
            </div>
        </footer>
    );
}