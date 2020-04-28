import React from 'react';
// importing css as styles
import styles from './loginHeader.module.css'
// importing icons
import leftArrow from '../../../asserts/icons/leftArrow.png';
// importing link
import { Link } from 'react-router-dom';

const loginHeader = (props) => {
    return (
        <div className={styles.container}>
            {
                props.backShow
                    ?
                    <div className={styles.back} onClick={props.onBack}><img src={leftArrow} alt="icon" /></div>
                    :
                    null
            }
            <div className={styles.menu}>
                <Link to="/"><div className={styles.login}>Login</div></Link>
                <Link to="/register"><div className={styles.register}>Register</div></Link>
            </div>
        </div>
    );
}

export default loginHeader;