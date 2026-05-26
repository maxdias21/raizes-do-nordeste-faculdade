import styles from "./PageHeader.module.css";

import Link from "next/dist/client/link";
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";

function PageHeader({title}) {
    return (
        <div className={styles.pageHeader}>
            <Link href="/"><FontAwesomeIcon icon={faArrowLeft}/></Link>
            <h1>{title}</h1>
        </div>
    )
}

export default PageHeader;