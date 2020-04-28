import React from 'react';
// importing css as styles
import styles from './loginForm.module.css';
// importing icons
import eyeIcon from '../../../asserts/icons/eye.png';

const loginForm = (props) => {
    return (
        <div className={styles.container}>
            <input className={styles.inputField} type="text" placeholder="Email *" onChange={(e)=> props.onEmailChange(e)}></input>

            <div className={styles.password}>
                <input className={styles.passField} type={props.showPassword ? "text" : "password"} placeholder="Password *" onChange={(e)=> props.onPassChange(e)}></input>
                <img src={eyeIcon} alt="icon" onClick={props.onShowPassword} />
            </div>

            <div className={styles.loginOptions}>
                <div onClick={props.onForgotPassword}>Forgot Password</div>
                <div onClick={props.withOTP}>Login With OTP</div>
            </div>

            <div className={styles.submit}>
                <span onClick={props.onLogin}>Login</span>
            </div>
        </div>
    );
}

export default loginForm;