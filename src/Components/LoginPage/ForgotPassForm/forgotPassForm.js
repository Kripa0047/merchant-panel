import React from 'react';
// importing css as styles
import styles from './forgotPassForm.module.css';

const forgotPassForm = (props) => {
    return(
        <div className={styles.container}>
            <div className={styles.header}>Enter your registered Email</div>

            <input className={styles.inputField} type="text" placeholder="Email *" onChange={(e)=> props.onEmailChange(e)}></input>

            <div className={styles.submit}>
                <span onClick={props.onVarifyEmail}>Login</span>
            </div>
        </div>
    );
}

export default forgotPassForm;