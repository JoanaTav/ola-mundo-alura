import styles from './Banner.module.css';
import minhaFoto from 'assets/minha_foto.jpg'

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Hello, World!
                </h1>

                <p className={styles.paragrafo}>
                    Seja bem vindo ao meu cantinho! 
                </p>
                <p className={styles.paragrafo}>
                    Me chamo Joana Tavares, sou estudante de programação com foco em Front End.
                </p>
                <p className={styles.paragrafo}>
                    Aqui pretendo compartilhar artigos sobre o mundo da tecnologia, obrigada pela visita e boa leitura! 
                </p>
            </div>

            <div className={styles.imagens}>
              <img
                    className={styles.minhaFoto}
                    src={minhaFoto}
                    alt="Foto da Joana Tavares"
                />
            </div>
        </div>
    )
}