import React from 'react'
// importing css as styles
import styles from './tagPopup.module.css';
// importing icons
import closeIcon from '../../asserts/icons/close.png';
import searchIcon from '../../asserts/icons/search.png';
import grayTick from '../../asserts/icons/grayTick.png';
import blueTick from '../../asserts/icons/blueTick.png';
import rightArrow from '../../asserts/icons/rightArrow.png';

const tagPopup = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.subContainer}>

                <div className={styles.rowContainer}>
                    <div className={styles.formHead}>Keywords : </div>
                    <div className={styles.close} onClick={props.onClose}><img src={closeIcon} alt="icon" /></div>
                </div>

                <div className={styles.rowContainer}>
                    <div className={styles.searchContainer}>
                        <img src={searchIcon} alt="icon" />
                        <input type="text" onChange={(e) => props.onSearch(e)} placeholder="Search for Keywords here ....." />
                    </div>
                </div>

                <div className={styles.allTags} onClick={() => props.onTagSelect(-1)}>
                    <div>All</div>
                    <img src={props.allTags ? blueTick : grayTick} alt="icon" />
                </div>

                {
                    props.tags.map((item, index) => {
                        return (
                            item.tagName.toLowerCase().startsWith(props.searchText.toLowerCase())
                                ?
                                <div key={index} className={styles.tags} onClick={() => props.onTagSelect(index)}>
                                    <div>{item.tagName}</div>
                                    <img src={item.selected ? blueTick : grayTick} alt="icon" />
                                </div>
                                :
                                null
                        )
                    })
                }


                <div className={styles.nextButton}>
                    <img onClick={props.onClose} src={rightArrow} alt="icon" />
                </div>


            </div>
        </div>
    );
}

export default tagPopup;