import React from 'react';
// importing css as styles
import styles from './dealCards.module.css';
// importing icons
import discountIcon from '../../asserts/icons/discount.png';
import calendarIcon from '../../asserts/icons/calendar.png';
import penIcon from '../../asserts/icons/pen.png';
import errorIcon from '../../asserts/icons/error.png';
import checkIcon from '../../asserts/icons/check.png';

import imagePizza from '../../asserts/images/pizza.png';


// =========PROPS LIST============
// boxes: to show box container
// inputBox: to show input container
const dealCards = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.cardBody}>

                <div className={styles.couponImage}><img src={imagePizza} alt="coupon" /><div className={styles.quantity}>Qty: 20</div></div>
                <div className={styles.cardDetails}>
                    <img src={discountIcon} alt="icon" />
                    <div>Flat 20% off on shopping of  Rs. 2  Flat ab 20% off on shopping of  Rs. 200/- 20% off on shopping of  Rs. 200/- </div>
                </div>

                <div className={styles.bar}></div>

                <div className={styles.timeContainer}>
                    <div className={styles.time}>3:00 PM - 4:00 PM</div>
                    <div className={styles.happyHours}>Happy Hour</div>
                </div>

                <div className={styles.bar}></div>

                <div className={styles.dateContainer}>
                    <div>
                        <div>From</div>
                        <div className={styles.date}><img src={calendarIcon} alt="icon" /><span>15-04-2020</span></div>
                    </div>
                    <div className={styles.verticalBar}></div>
                    <div>
                        <div>To</div>
                        <div className={styles.date}><img src={calendarIcon} alt="icon" /><span>15-04-2020</span></div>
                    </div>
                </div>

            </div>
            <div className={styles.bottomContainer}>
                {
                    props.boxes
                        ?
                        <div className={styles.editConatiner}>
                            {props.boxesList[0] ? <div className={styles.edit}><img src={penIcon} alt="icon" /></div> : null}
                            {props.boxesList[1] ? <div className={styles.block}><img src={errorIcon} alt="icon" /></div> : null}
                            {props.boxesList[2] ? <div className={styles.accept} onClick={() => props.onAccept(props.index)}><img src={checkIcon} alt="icon" /></div> : null}
                        </div>
                        :
                        null
                }

                {
                    props.inputBox
                        ?
                        <div className={styles.editConatiner}>
                            {
                                props.numberShow
                                    ?
                                    <div className={styles.number}><span>1</span></div>
                                    :
                                    null
                            }
                            <div className={styles.change} onClick={() => props.onChange(props.index)}>{props.buttonName}</div>
                        </div>
                        :
                        null
                }
            </div>
        </div>
    );
}

export default dealCards;