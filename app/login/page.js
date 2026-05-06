import styles from "./page.module.css";

import Form from "../components/Login/Form";
import ImagePanel from "../components/Login/ImagePanel";
import Logo from "../components/Login/Logo";

function LoginPage() {
    return (
        <main className={styles.container}>
            <ImagePanel />
            <div className={styles.login__container}>
                <Logo />
                <section className={styles.login__content}>
                    <h2>Bem vindo de volta!</h2>
                    <p>Faça login para continuar.</p>
                   <Form />
                </section>
            </div>
        </main>
    );
}

export default LoginPage;