import styles from "./SobreMim.module.css";

import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/sobre_mim_foto.png";

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Joana Tavares
            </h3>

            <img
                src={fotoSobreMim}
                alt="Ilustração da Joana Tavares feita no Bing Copilot Designer"
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>
                Oi, tudo bem? Me chamo Joana Tavares e sou aluna de Front-end da One Oracle + Alura T6 ONE. 
            </p>
            <p className={styles.paragrafo}>
                Desde janeiro de 2024, sou estudante de programação com foco em HTML | CSS | JS | REACT
            </p>
            <p className={styles.paragrafo}>
                Sou de Niterói, Rio de Janeiro e apesar de carioca, não gosto da praia kk
            </p>
            <p className={styles.paragrafo}>
                Prefiro ficar em casa desenhando, lendo ou estudando. Amo gatos, séries de comédia, pizza, sorvete, livros de suspense, desenhos animados e cultura geek em geral.
            </p>
            <p className={styles.paragrafo}>
                Na adolescência me apaixonei pelo mundo dos jogos online, blogs, tumblr e pinterest. Passei muitas horas editando o visual do meu blog e foi assim que descobri o gosto por design e programação.  
            </p>
            <p className={styles.paragrafo}>
                Agora decidi retomar essa experiênca, elevando-a e transformando em carreira. 
            </p>
            <p className={styles.paragrafo}>
                Sei que ainda tenho um longo caminho pela frente, mas estou ansiosa para encarar os desafios e me aprimorar cada vez mais! 
            </p>
        </PostModelo>
    )
}