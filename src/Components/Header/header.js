import React from 'react';
// importing css as styles
import styles from './header.module.css';
// importing logo
import mainLogo from '../../asserts/images/mainLogo.png';
import downArrow from '../../asserts/icons/downArrow.png';
// importing icon
import barsIcon from '../../asserts/icons/bars-solid.svg';

const header = (props) => {
    return(
        <div className={styles.container}>
            {
                props.menuShow
                ?
                <div className={styles.logoContainer}><img className={styles.mainLogo} src={mainLogo} alt="Logo" /><img onClick={props.onShowMenu} className={styles.menuIcon} src={barsIcon} alt="Logo" /></div>
                :
                <div className={styles.logoContainer}><img className={styles.mainLogoDash} src={mainLogo} alt="Logo" /></div>
            }
            <div className={styles.adminContainer} onClick={()=>{document.getElementById("dropDown").classList.toggle(styles.displayNone)}}>
                <div>Stickman</div>
                <img src={downArrow} alt="arrow" />
                <div id="dropDown" className={styles.dropdownConatiner}>
                    <div className={styles.dropItem}>Logout</div>
                </div>
            </div>
        </div>
    );
}

export default header;