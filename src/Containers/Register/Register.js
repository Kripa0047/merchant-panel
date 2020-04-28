import React, { Component } from 'react';
// importing css as styles
import styles from './Register.module.css';
// importing login header
import LoginHeader from '../../Components/LoginPage/LoginHeader/loginHeader';
// importing register form
import RegisterForm from '../../Components/RegisterPage/RegisterForm/RegisterForm';
// importing opt form
import OTPForm from '../../Components/LoginPage/OTPForm/otpForm';
// importing logo
import logoutLogo from '../../asserts/icons/logout.png';

class Register extends Component {
    state = {
        render: 'registerForm',
        OTP: ['', '', '', ''],
        number: '',

        showBack: false
    }

    // ===========================ON REGISTER========================
    onRegister = () => {
        let render = 'otpForm';
        let showBack = true;

        this.setState({
            render,
            showBack
        });
    }

    // ==============================GETTING OTP=====================
    onOTPInput = (event, index) => {
        let OTP = [...this.state.OTP];
        if (event.target.value.length < 2) {
            OTP[index] = event.target.value;
        }
        this.setState({ OTP });
        if (index < OTP.length - 1 && event.target.value !== "") {
            document.getElementById("OTP" + (index + 1)).select();
        } else if (event.target.value === "") {
            if (index > 0) {
                document.getElementById("OTP" + (index - 1)).select();
            }
        }
    }

    // ========================ON RESEND OTP==========================
    onResend = () => {
        console.log("RESENDING...");
    }

    // ============================ON VARIFY==========================
    onOTPVarify = () => {
        let render = 'payNow';

        this.setState({
            render
        });
    }

    // ===========================ON BACK=============================
    onBack = () => {
        let render = 'registerForm';
        let showBack = false;

        this.setState({
            render,
            showBack
        });
    }

    render() {
        return (
            <div className={styles.conatiner}>
                <div className={styles.subContainer}>
                    <div className={styles.imageContainer}></div>
                    <div className={styles.contentContainer}>
                        {/* header */}
                        {
                            this.state.render === 'payNow'
                                ?
                                <div className={styles.headerContainer}>
                                    <div className={styles.header}>
                                        <div>Logout</div>
                                        <img src={logoutLogo} alt="icon" />
                                    </div>
                                </div>
                                :
                                <LoginHeader
                                    backShow={this.state.showBack}
                                    onBack={this.onBack}
                                />
                        }

                        <div className={styles.content}>

                            {
                                this.state.render === 'registerForm'
                                    ?
                                    <RegisterForm
                                        onRegister={this.onRegister}
                                    />
                                    :
                                    null
                            }

                            {
                                this.state.render === 'otpForm'
                                    ?
                                    <OTPForm
                                        OTP={this.state.OTP}
                                        number={this.state.number}
                                        onOTPInput={(e, index) => this.onOTPInput(e, index)}
                                        onOTPVarify={this.onOTPVarify}
                                        onResend={this.onResend}
                                    />
                                    :
                                    null
                            }

                            {
                                this.state.render === 'payNow'
                                    ?
                                    <div className={styles.payNowConatiner}>
                                        <div className={styles.paynowHeader}>Dear Merchant</div>
                                        <div className={styles.payNowText}>Dear Merchant you have to pay  <span>Rs 200/-</span> as a fee of registration for getting on this playform.</div>
                                        <div className={styles.sumbit}><span>Pay Now</span></div>
                                    </div>
                                    :
                                    null
                            }

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;