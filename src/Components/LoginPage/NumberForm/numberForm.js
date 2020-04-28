import React from 'react';
// importing css as styles
import styles from './numberForm.module.css';

const numberForm = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                Enter Registered Mobile number
            </div>

            <input className={styles.inputField} type="number" onChange={props.onNumber} placeholder="Mobile Number *"></input>

            <div className={styles.submit}>
                <span onClick={props.onGetOTP}>Get OTP</span>
            </div>
        </div>
    );
}

export default numberForm;