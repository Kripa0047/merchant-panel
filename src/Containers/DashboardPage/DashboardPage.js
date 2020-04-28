import React, { Component } from 'react';
// importing css as styles
import styles from './DashboardPage.module.css';
import { Switch, Route } from 'react-router-dom';
// importing header
import Header from '../../Components/Header/header';
// importing navbar
import Navbar from '../Navbar/Navbar';
// importing pages
import HappyDeals from '../HappyDeals/HappyDeals';


class DashboardPage extends Component {
    // ====================SUB MAIN STORE==========================
    state = {
        menuListRef: React.createRef(),
        layerRef: React.createRef()
    }
    // ===============TO TOGGLE SHRINK NAV BAR======================
    onToggleNav = () => {
        // console.log("called");
        document.getElementById("container1").classList.toggle(styles.shrink);
        document.getElementById("container2").classList.toggle(styles.shrink);
    }
    // ======================TO TOGGLE MENU==========================
    onShowMenu = () => {
        // console.log("menu");
        this.state.menuListRef.current.classList.toggle(styles.menuListShow);
        this.state.layerRef.current.classList.toggle(styles.layerShow);
    }

    render() {
        return (
            <div>
                <div className={styles.headerContainer}><Header menuShow={true} onShowMenu={this.onShowMenu} /></div>
                <div className={styles.container}>
                    <div id="container1" className={styles.navbarConatiner} ref={this.state.menuListRef}>
                        <div id="container2" className={styles.navContain}><Navbar menu={this.props.menu} history={this.props.history} onToggleNav={this.onToggleNav} /></div>
                    </div>
                    <div className={styles.componentsContainer}>
                        <Switch>
                            <Route exact path='/dashboardpage/happydeals' component={HappyDeals} />
                        </Switch>
                    </div>
                    {/* =========layer======= */}
                    <div onClick={this.onShowMenu} ref={this.state.layerRef} className={styles.layer}></div>
                </div>
            </div>
        );
    }
}

export default DashboardPage;