import React, { Component } from 'react';
// importing css as styles
import styles from './RegisterForm.module.css';
// importing icon
import eyeIcon from '../../../asserts/icons/eye.png';
import imgUpload from '../../../asserts/icons/imgUpload.png';
// import classNames as cx
import cx from 'classnames';

class RegisterForm extends Component {
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.subContainer}>

                    <div className={styles.rowContainer}>

                        <select className={styles.selectBox} >
                            <option value="0">Business Type *</option>
                            <option value="1">option</option>
                            <option value="2">option</option>
                            <option value="3">option</option>
                        </select>

                        <select className={styles.selectBox}>
                            <option value="0">Business Category *</option>
                            <option value="1">option</option>
                            <option value="2">option</option>
                            <option value="3">option</option>
                        </select>

                    </div>

                    <div className={styles.rowContainer}>
                        <input className={styles.selectBox} type="text" placeholder="Business Name *" />
                        <input className={styles.selectBox} type="text" placeholder="FSSAI no. *" />
                    </div>

                    <div className={styles.rowContainer}>
                        <input className={styles.selectBox} type="text" placeholder="Mobile Number *" />
                        <input className={styles.selectBox} type="text" placeholder="User Name *" />
                    </div>

                    <div className={styles.rowContainer}>
                        <input className={styles.selectBox} style={{ width: "100%" }} type="text" placeholder="Email *" />
                    </div>

                    <div className={styles.rowContainer} style={{ borderBottom: "2px solid #ffffff" }}>
                        <input className={styles.selectBox} style={{ width: "90%", border: "none" }} type="password" placeholder="Password *" />
                        <img className={styles.showPassword} src={eyeIcon} alt="icon" />
                    </div>

                    <div className={styles.rowContainer}>

                        <select className={styles.selectBox} >
                            <option value="0">State *</option>
                            <option value="1">option</option>
                            <option value="2">option</option>
                            <option value="3">option</option>
                        </select>

                        <select className={styles.selectBox}>
                            <option value="0">City *</option>
                            <option value="1">option</option>
                            <option value="2">option</option>
                            <option value="3">option</option>
                        </select>

                    </div>

                </div>

                <div className={styles.subContainer}>
                    <div className={styles.middleRowContainer}>

                        <input className={styles.selectBox} type="text" placeholder="FSSAI no. *" />

                        <select className={styles.selectBox} >
                            <option value="0">State *</option>
                            <option value="1">option</option>
                            <option value="2">option</option>
                            <option value="3">option</option>
                        </select>

                        <input className={styles.selectBox} type="text" placeholder="Map Link *" />

                    </div>
                    <div className={styles.addButton}>
                        <span>ADD</span>
                    </div>
                </div>

                <div className={styles.subContainer}>
                    <div className={styles.rowContainer} style={{ marginTop: "0" }}>

                        <label className={styles.containerBox}>All DAY
                            <input type="checkbox" />
                            <span className={styles.checkmark}></span>
                        </label>

                        <div className={styles.dayRowContainer}>
                            <select className={styles.selectBox} >
                                <option value="0">Open at *</option>
                                <option value="1">option</option>
                                <option value="2">option</option>
                                <option value="3">option</option>
                            </select>

                            <select className={styles.selectBox} >
                                <option value="0">Close at *</option>
                                <option value="1">option</option>
                                <option value="2">option</option>
                                <option value="3">option</option>
                            </select>
                        </div>

                    </div>

                    <div className={cx(styles.rowContainer, styles.checkDays)} style={{margin: "30px 0 0 0"}}>
                        <label className={styles.containerBox}>Mon
                            <input type="checkbox" />
                            <span className={styles.checkmark}></span>
                        </label>

                        <label className={styles.containerBox}>Tue
                            <input type="checkbox" />
                            <span className={styles.checkmark}></span>
                        </label>

                        <label className={styles.containerBox}>Wed
                            <input type="checkbox" />
                            <span className={styles.checkmark}></span>
                        </label>

                        <label className={styles.containerBox}>Thur
                            <input type="checkbox" />
                            <span className={styles.checkmark}></span>
                        </label>

                        <label className={styles.containerBox}>Fri
                            <input type="checkbox" />
                            <span className={styles.checkmark}></span>
                        </label>

                        <label className={styles.containerBox}>Sat
                            <input type="checkbox" />
                            <span className={styles.checkmark}></span>
                        </label>

                        <label className={styles.containerBox}>Sun
                            <input type="checkbox" />
                            <span className={styles.checkmark}></span>
                        </label>
                    </div>
                </div>

                <div className={styles.upload}>
                    <span><img src={imgUpload} alt="icon"/> <div className={styles.uploadLabel}> Upload Logo<input type="file" id="img" name="img" accept="image/*" /></div></span>
                </div>

                <div className={cx(styles.rowContainer, styles.flexColumn)}>
                    <div className={styles.TCText}>By Registering, I agree to the <span>Terms & Conditions</span></div>
                    <div className={styles.registerButton} onClick={this.props.onRegister}>Register</div>
                </div>
            </div>
        );
    }
}

export default RegisterForm;