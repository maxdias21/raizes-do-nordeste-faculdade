"use client";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLock, faUser} from "@fortawesome/free-solid-svg-icons";

import styles from "./Form.module.css";
import {useState} from "react";

import React from "react";
import { useRouter } from "next/navigation";

import Modal from "../Modal";

import {useForm} from "./useForm";


function Form() {
    const [fields, setFields] = useState([
        {value: "", errors: [], type: "email", placeholder: "email", icon: faUser},
        {value: "", errors: [], type: "password", placeholder: "senha", icon: faLock},

    ]);

    const [hasErrors, setHasErrors] = useState(true);
    const [openModal, setOpenModal] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [textButton, setTextButton] = useState('Entrar');

    const router = useRouter();

    const {handleChange} = useForm({fields, setFields, setHasErrors});


    function handleSubmit(event) {
        setIsLoading(true);
        setTextButton("Entrando...");

        event.preventDefault();

        localStorage.setItem("user", JSON.stringify({
            email: "uninter@gmail.com",
            isLogged: true,
        }));

        setTimeout(() => {
            router.push("/")
        }, 2000);
    }

    return (
        <>
            <Modal openModal={openModal} setOpenModal={setOpenModal}></Modal>
            <form onSubmit={handleSubmit} className={styles.login__form}>
                {fields.map((field, i) => (
                    <React.Fragment key={field.placeholder}>
                        <div className={styles.input__wrapper}>
                            <FontAwesomeIcon className={styles.svg} icon={field.icon}/>
                            <input onChange={(e) => handleChange(e, field.placeholder)} placeholder={field.placeholder}
                                   type={field.type}/>

                        </div>
                        {field.errors.length > 0 && field.errors.map((error, i) => (
                            <span key={i} className={styles.errors}>{error}<strong></strong></span>
                        ))}
                    </React.Fragment>

                ))}
                <p onClick={() => setOpenModal(!openModal)}>Esqueci minha senha</p>
                <button disabled={isLoading} className={hasErrors ? styles.disabled : styles.enabled} type="submit" value="Entrar">{textButton}</button>
                <p>Ainda não tem uma conta? <span onClick={() => setOpenModal(!openModal)}>Cadastre-se</span></p>
            </form>
        </>
    );
}

export default Form;