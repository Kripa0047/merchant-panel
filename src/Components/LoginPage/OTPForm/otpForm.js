import React from 'react';
// importing css as styles
import styles from './otpForm.module.css';

const otpForm = (props) => {
    return (
        <div className={styles.container}>
            <h3 className={styles.loginHeader}>Verify OTP</h3>
            <div className={styles.OTPHeader}>Our secret agent has sent you a<br/>secret OTP on {props.number}</div>

            <div>
                {
                    props.OTP.map((item, index) => {
                        return (
                            <input key={index} id={"OTP" + index} onChange={(e) => props.onOTPInput(e, index)} className={styles.OTPInput} value={item} type="number" />
                        )
                    })
                }
            </div>

            <div className={styles.resend}>Didn’t recieve the OTP ?  <span onClick={props.onResend}>Resend OTP</span></div>

            <div className={styles.submit}>
                <span onClick={props.onOTPVarify} >Verify</span>
            </div>
        </div>
    );
}

export default otpForm;