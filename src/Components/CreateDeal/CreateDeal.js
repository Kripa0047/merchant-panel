import React, { Component } from 'react';
// importing css as styles
import styles from './CreateDeal.module.css';
// importing icons
import closeIcon from '../../asserts/icons/close.png';
import imgUpload from '../../asserts/icons/imgUpload.png';
// import classNames as cx
import cx from 'classnames';
// importing TagPopup
import TagPopup from '../TagPopup/tagPopup';

class CreateDeal extends Component {
    state = {
        showTagPopup: false,
        showRealStartDate: false,
        showRealExpiryDate: false,
        showRealFromTime: false,
        showRealToTime: false,

        searchText: ''
    }

    render() {
        return (
            <div className={styles.container}>
                {/* TagPopup */}
                {
                    this.state.showTagPopup
                        ?
                        <TagPopup
                            onClose={() => this.setState({ showTagPopup: false, searchText: '' })}
                            tags={this.props.tags}
                            onTagSelect={this.props.onTagSelect}
                            allTags={this.props.allTags}
                            onSearch={(e) => this.setState({ searchText: e.target.value })}
                            searchText={this.state.searchText}
                        />
                        :
                        null
                }

                <div className={styles.contentContainer}>

                    <div className={styles.rowContainer}>
                        <div className={styles.formHead}>Create Your Happy deal</div>
                        <div className={styles.close} onClick={this.props.onClose}><img src={closeIcon} alt="icon" /></div>
                    </div>

                    <div className={styles.underBar}></div>

                    <div className={styles.rowContainer}>
                        <input className={styles.selectBox} style={{ width: "100%" }} type="text" placeholder="Happy Deal name *" />
                    </div>

                    <div className={styles.rowContainer}>
                        <select className={styles.selectBox} >
                            <option value="0">Deal Type *</option>
                            <option value="1">option</option>
                            <option value="2">option</option>
                            <option value="3">option</option>
                        </select>

                        <select className={styles.selectBox}>
                            <option value="0">Qty *</option>
                            <option value="1">option</option>
                            <option value="2">option</option>
                            <option value="3">option</option>
                        </select>
                    </div>

                    <div className={styles.rowContainer}>
                        <div className={styles.textLine}>Select Keywords for search *</div>
                        <div className={styles.add} onClick={() => this.setState({ showTagPopup: true })}>ADD</div>
                    </div>

                    <div className={styles.tagContainer}>
                        {
                            this.props.tags.map((item, index) => {
                                return (
                                    item.selected
                                        ?
                                        <div key={index} className={styles.tagText}>{item.tagName}<span onClick={() => this.props.onTagSelect(index)}>x</span></div>
                                        :
                                        null
                                )
                            })
                        }
                    </div>

                    <div className={styles.rowContainer} style={{ justifyContent: "start" }}>
                        <div className={styles.toggleLable}>
                            <div className={styles.radioContainer} onClick={this.props.hourSelect} style={this.props.dealTimeHour ? { backgroundColor: "#024477" } : null}><span></span></div>
                            <div>Happy Hour Deal</div>
                        </div>

                        <div className={styles.toggleLable}>
                            <div className={styles.radioContainer} onClick={this.props.daySelect} style={this.props.dealTimeDay ? { backgroundColor: "#024477" } : null}><span></span></div>
                            <div>Full Day Deal</div>
                        </div>
                    </div>

                    <div className={styles.rowContainer} style={{ marginBottom: "-10px" }}>
                        <div className={styles.textLine}>Date *</div>
                    </div>

                    <div className={styles.rowContainer}>
                        <input className={styles.selectBox} type={this.state.showRealStartDate ? "date" : "text"} onFocus={() => this.setState({ showRealStartDate: true })} onBlur={() => this.setState({ showRealStartDate: false })} placeholder="Start *" />

                        <input className={styles.selectBox} type={this.state.showRealExpiryDate ? "date" : "text"} onFocus={() => this.setState({ showRealExpiryDate: true })} onBlur={() => this.setState({ showRealExpiryDate: false })} placeholder="Expiry *" />
                    </div>

                    <div className={styles.rowContainer} style={{ marginBottom: "-10px" }}>
                        <div className={styles.textLine} >Time *</div>
                    </div>

                    <div className={styles.rowContainer}>
                        <input className={styles.selectBox} type={this.state.showRealFromTime ? "time" : "text"} onFocus={() => this.setState({ showRealFromTime: true })} onBlur={() => this.setState({ showRealFromTime: false })} placeholder="From *" />

                        <input className={styles.selectBox} type={this.state.showRealToTime ? "time" : "text"} onFocus={() => this.setState({ showRealToTime: true })} onBlur={() => this.setState({ showRealToTime: false })} placeholder="To *" />
                    </div>

                    <div className={styles.upload}>
                        <span><img src={imgUpload} alt="icon" /> <div className={styles.uploadLabel}> Upload Logo<input type="file" id="img" name="img" accept="image/*" /></div></span>
                    </div>

                    <div className={cx(styles.rowContainer, styles.flexColumn)}>
                        <div className={styles.TCText}>By Registering, I agree to the <span>Terms & Conditions</span></div>
                        <div className={styles.registerButton} onClick={this.props.onRegister}>Create</div>
                    </div>

                </div>
            </div>
        );
    }
}

export default CreateDeal;