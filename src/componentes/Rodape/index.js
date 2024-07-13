import styles from './Rodape.module.css';

export default function Rodape() {
    return (
        <footer className={styles.rodape}>
            <section>
            <ul>
                <li>
                    <a href="https://www.linkedin.com/in/joana-tavares-dev/" target="_blank" rel="noreferrer">
                    <img width="28" height="28" src="https://img.icons8.com/glyph-neue/28/FFFFFF/linkedin-circled.png" alt="linkedin logo"/>
                    </a>
                </li>
            <li>
                    <a href="https://github.com/JoanaTav" target="_blank" rel="noreferrer">
                    <img width="28" height="28" src="https://img.icons8.com/ios-glyphs/28/FFFFFF/github.png" alt="github logo"/>
                    </a>
                </li>
            </ul>
        </section>
        
            Desenvolvido por Alura ⋅ Joana Tavares 2024
        </footer>
    )
}