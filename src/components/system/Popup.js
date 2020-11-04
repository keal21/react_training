import React from "react";
import styles from '../../css/styles.module.css';

const Popup = (props) => (
    <div className={styles.popupBackground}>
        <div className={styles.popup}>
            <div className={styles.popupContent}>
                <div>{props.children}</div>
            </div>
        </div>
    </div>
);

export default Popup;
