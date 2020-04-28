import React from 'react';
// importing css as styles
import styles from './navMenuCard.module.css';
// importing link
import { Link } from 'react-router-dom';

const navMenuCard = (props) => {
    return (
        <div className={styles.container} onClick={() => props.OnClick(props.index)} style={props.index === props.selsectedIndex ? { backgroundColor: "#00000044" } : null}>
            <Link to={props.to}>
                <div className={styles.cardBody}>
                    <img src={props.icon} alt="icon" />
                    {props.shrinkMenu ? null : <div className={styles.cardHeader}>{props.header}</div>}
                </div>
            </Link>
        </div>
    );
}

export default navMenuCard;