import styles from "./Login/Form.module.css";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClose} from "@fortawesome/free-solid-svg-icons";

function Modal({openModal, setOpenModal}) {
    return (
        <dialog open={openModal}>
            <article className={styles.formContainer}>
                <header className={styles.formContent}>
                    <FontAwesomeIcon onClick={() => setOpenModal(false)} className={styles.closeButton} icon={faClose} />
                    <section className={styles.textWrapper}>
                        <h2 className={styles.h2}>Aviso: Usuário de Teste</h2>
                        <p>Este projeto utiliza um sistema de login único para fins de avaliação. Por favor, utilize
                            as
                            credenciais abaixo para acessar o sistema:
                        </p>
                        <div className={styles.loginWrapper}>
                            <p><strong>Login:</strong> uninteremail@gmail.com</p>
                            <p><strong>Senha:</strong> uninter</p>
                        </div>
                    </section>
                    <small className={styles.disclaimer}>Os dados de cadastro estão desabilitados nesta versão.</small>
                </header>
            </article>
        </dialog>
    )
}

export default Modal;