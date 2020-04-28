import React from 'react';
// importing css as styles
import styles from './subHeader.module.css';
// importing icon
import searchIcon from '../../asserts/icons/search.png';

const subHeader = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.menuContainer}>
                {
                    props.menu.map((item, index) => {
                        return (
                            <div key={index} className={styles.menuItems} onClick={()=>{props.requestMenuData(index)}}
                                style={props.selectedMenuIndex === index ? { backgroundColor: "#000000", color: "#ffffff" } : null}>{item.name}</div>
                        )
                    })
                }
            </div>
            <div className={styles.search}>
                <img src={searchIcon} alt="icon" />
                <input type="text" placeholder="Search here..." />
            </div>
        </div>
    );
}

export default subHeader;