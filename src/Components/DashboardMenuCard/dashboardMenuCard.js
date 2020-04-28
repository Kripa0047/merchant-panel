import React from 'react';
// import css as styles
import styles from './dashboardMenuCard.module.css';
// importing Link
import { Link } from 'react-router-dom';

const dashboardMenuCard = (props) => {
    return (
        <div className={styles.container}>
            <Link to={props.to}>
                <div className={styles.cardBody}>
                    <img src={props.icon} alt="icon" />
                    <div className={styles.cardHeader}>{props.header}</div>
                    <div className={styles.cardText}>{props.text}</div>
                </div>
            </Link>
        </div>
    );
}

export default dashboardMenuCard;