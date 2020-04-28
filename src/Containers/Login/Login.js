import React, { Component } from 'react';
// importing css as styles
import styles from './Login.module.css';
// importing login header
import LoginHeader from '../../Components/LoginPage/LoginHeader/loginHeader';
// importing login form
import LoginForm from '../../Components/LoginPage/LoginForm/loginForm';
// importing alert
import Alert from '../../Components/Alert/alert';
// importing number form
import NumberForm from '../../Components/LoginPage/NumberForm/numberForm';
// importing OTP from
import OTPForm from '../../Components/LoginPage/OTPForm/otpForm';
// importing forgot pass form
import ForgotPassForm from '../../Components/LoginPage/ForgotPassForm/forgotPassForm';

class Login extends Component {
    state = {
        email: '',
        password: '',
        number: 0,
        OTP: ['', '', '', ''],

        render: 'loginForm',
        showPassword: false,

        showBack: false,
        alertText: 'boom',
        showAlert: false

    }

    // ========================ON BACK============================
    onBack = () => {
        let email = '';
        let password = '';
        let render = 'loginForm';
        let showBack = false;
        let number = 0;
        let OTP = ['', '', '', ''];

        this.setState({
            email,
            password,
            render,
            showBack,
            number,
            OTP
        });
    }

    // =======================FORGOT PASSWORD======================
    onForgotPassword = () => {
        let render = "forgotPassword";
        let showBack = true;
        let email = "";

        this.setState({
            render,
            showBack,
            email
        });
    }

    // =======================WITH OTP======================
    withOTP = () => {
        let render = "withOTP";
        let showBack = true;

        this.setState({
            render,
            showBack,
        });
    }

    // =========================ON LOGIN===========================
    onLogin = () => {
        let email = this.state.email;
        let password = this.state.password;
        let varified = true;
        let alertText = '';
        let showAlert = false;

        if (!email.includes(".") || !email.includes("@")) {
            alertText = "Please enter a valid email!!!";
            showAlert = true;
            varified = false;
        }

        if (password.length === 0) {
            alertText = "Please enter a password!!!";
            showAlert = true;
            varified = false;
        }

        this.setState({
            alertText,
            showAlert
        }, () => {
            if (varified) {
                console.log("email: ", email, "password: ", password);
                // API CALL
            }
        });

    }

    // =============================ON GET OTP===========================
    onGetOTP = () => {
        let number = this.state.number;
        let valid = true;
        let alertText = '';
        let showAlert = false;
        let root = this;

        if (number.length !== 10) {
            valid = false;
            alertText = 'Enter a valid Modile Number!!!';
            showAlert = true;
        }

        this.setState({
            alertText,
            showAlert
        }, () => {
            if (valid) {
                console.log("number: ", number);
                // API CALL
                // render dependinf upon response
                root.setState({ render: 'OTPForm' });
            }
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

    // =========================ON OTP SUBMIT=========================
    onOTPVarify = () => {
        let OTP = [...this.state.OTP];
        let OTPNum = OTP[0] + OTP[1] + OTP[2] + OTP[3];
        let valid = true;
        let alertText = '';
        let showAlert = false;

        if (OTPNum.length !== 4) {
            alertText = 'Please Enter the full OTP!!!';
            showAlert = true;
            valid = false;
        }

        this.setState({
            alertText,
            showAlert
        }, () => {
            if (valid) {
                OTPNum = parseInt(OTPNum);
                console.log("OTP: ", OTPNum);
                // API CALL
            }
        });
    }

    // =====================FORGOT PASSWORD SUBMIT=================
    onVarifyEmail = () => {
        let email = this.state.email;
        let alertText = '';
        let showAlert = false;
        let valid = true;

        if (!email.includes(".") || !email.includes("@")) {
            alertText = "Please enter a valid email!!!";
            showAlert = true;
            valid = false;
        }

        this.setState({
            alertText,
            showAlert
        }, () => {
            if(valid){
                console.log("Email: ", email);
                // API CALL
            }
        });

    }

    render() {
        return (
            <div className={styles.conatiner}>
                {/* ALERT */}
                <Alert
                    alertText={this.state.alertText}
                    toShow={this.state.showAlert}
                    onClose={() => this.setState({ showAlert: false })}
                />

                <div className={styles.subContainer}>
                    <div className={styles.imageContainer}></div>
                    <div className={styles.contentContainer}>
                        {/* header */}
                        <LoginHeader
                            backShow={this.state.showBack}
                            onBack={this.onBack}
                        />

                        <div className={styles.content}>

                            {
                                this.state.render === "loginForm"
                                    ?
                                    <LoginForm
                                        onForgotPassword={this.onForgotPassword}
                                        onPassChange={(e) => this.setState({ password: e.target.value })}
                                        onEmailChange={(e) => this.setState({ email: e.target.value })}
                                        onLogin={this.onLogin}
                                        showPassword={this.state.showPassword}
                                        onShowPassword={() => this.setState({ showPassword: !this.state.showPassword })}
                                        withOTP={this.withOTP}
                                    />
                                    :
                                    null
                            }

                            {
                                this.state.render === "forgotPassword"
                                    ?
                                    <ForgotPassForm
                                        onEmailChange={(e) => this.setState({ email: e.target.value })}
                                        onVarifyEmail={this.onVarifyEmail}
                                    />
                                    :
                                    null
                            }

                            {
                                this.state.render === "withOTP"
                                    ?
                                    <NumberForm
                                        onNumber={(e) => this.setState({ number: e.target.value })}
                                        onGetOTP={this.onGetOTP}
                                    />
                                    :
                                    null
                            }

                            {
                                this.state.render === "OTPForm"
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

                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Login;