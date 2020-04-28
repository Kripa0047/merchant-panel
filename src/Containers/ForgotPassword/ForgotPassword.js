import React, { Component } from 'react';
// importing css as styles
import styles from './ForgotPassword.module.css';
// importing icon
import eyeIcon from '../../asserts/icons/eye.png';


class ForgotPassword extends Component {
    state = {
        newPassword: '',
        confirmPassword: '',

        newPassShow: false,
        confirmPassShow: false
    }

    // ============================onChangePassword==================
    onChangePassword = () => {
        let newPassword = this.state.newPassword;
        let confirmPassword = this.state.confirmPassword;

        console.log("Pass: ", newPassword, "ConfirmPass: ", confirmPassword);
    }

    render() {
        return (
            <div className={styles.conatiner}>
                <div className={styles.subContainer}>
                    <div className={styles.imageContainer}></div>
                    <div className={styles.contentContainer}>

                        <div className={styles.content}>

                            <div className={styles.container}>
                                <div className={styles.password}>
                                    <input className={styles.passField} type={this.state.newPassShow ? "text" : "password"} placeholder="New Password *" onChange={(e)=> this.setState({newPassword: e.target.value})}></input>
                                    <img src={eyeIcon} alt="icon" onClick={()=>this.setState({newPassShow: !this.state.newPassShow})} />
                                </div>

                                <div className={styles.password}>
                                    <input className={styles.passField} type={this.state.confirmPassShow ? "text" : "password"} placeholder="Confirm Password *" onChange={(e)=> this.setState({confirmPassword: e.target.value})}></input>
                                    <img src={eyeIcon} alt="icon" onClick={()=>this.setState({confirmPassShow: !this.state.confirmPassShow})} />
                                </div>

                                <div className={styles.submit}>
                                    <span onClick={this.onChangePassword}>Change Password</span>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default ForgotPassword;