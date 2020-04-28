import React from 'react';
// importing css as styles
import styles from './alert.module.css';
// importing icons
import alertIcon from '../../asserts/icons/alert.png';
import closeIcon from '../../asserts/icons/close.png';

// alert popup
// props:
// alterText: type - string (for alert text to disply)
// onClose: type - function (gets called on clicking the close button)
// toShow: bool (to toogle the alert popup)

const alert = (props) => {
    return(
        <div onClick={props.onClose} className={styles.container} style={props.toShow ? {display: "block"} : {display: "none"}}>
            <div className={styles.popUp}>
                <img onClick={props.onClose} className={styles.close} src={closeIcon} alt="icon" />
                <div><img src={alertIcon} alt="icon" /></div>
                <div className={styles.alert}>Alert</div>
                <div className={styles.alertText}>
                    {props.alertText}
                </div>
            </div>
        </div>
    );
}

export default alert;