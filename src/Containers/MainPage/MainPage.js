import React, { Component } from 'react';
// importing routers
import { Router, Route } from 'react-router-dom';
// importing history
import History from '../History/History';
// importing login
import Login from '../Login/Login';
import Register from '../Register/Register';
import Dashboard from '../Dashboard/Dashboard';
import DashboardPage from '../DashboardPage/DashboardPage';
import ForgotPassword from '../ForgotPassword/ForgotPassword';
// importing icons
import cartIcon from '../../asserts/icons/cart.png';
import profileIcon from '../../asserts/icons/profile.png';
import HDIcon from '../../asserts/icons/hd.png';
import galleryIcon from '../../asserts/icons/gallery.png';
import headIcon from '../../asserts/icons/head.png';
import micIcon from '../../asserts/icons/mic.png';
import supportIcon from '../../asserts/icons/support.png';
import peopleIcon from '../../asserts/icons/people.png';

class MainPage extends Component {
    // main state
    state = {
        menuList: []
    }

    // setting menu
    componentDidMount() {
        let menuList = [
            {to: "/dashboardpage/#", icon: profileIcon, header: "Profile", text: "Deals for approval from merchant. Deals for approval from merchant."},
            {to: "/dashboardpage/#", icon: peopleIcon, header: "Customers", text: "Deals for approval from merchant. Deals for approval from merchant."},
            {to: "/dashboardpage/happydeals", icon: cartIcon, header: "Happy Deals", text: "Deals for approval from merchant. Deals for approval from merchant."},
            {to: "/dashboardpage/#", icon: galleryIcon, header: "Gallery", text: "Deals for approval from merchant. Deals for approval from merchant."},
            {to: "/dashboardpage/#", icon: HDIcon, header: "HD Points", text: "Deals for approval from merchant. Deals for approval from merchant."},
            {to: "/dashboardpage/#", icon: headIcon, header: "Reviews", text: "Deals for approval from merchant. Deals for approval from merchant."},
            {to: "/dashboardpage/#", icon: micIcon, header: "Advertisement", text: "Deals for approval from merchant. Deals for approval from merchant."},
            {to: "/dashboardpage/#", icon: supportIcon, header: "Support", text: "Deals for approval from merchant. Deals for approval from merchant."}
        ];

        this.setState({menuList: menuList});
    }


    render() {
        return(
            <Router history={History}>
                <Route exact path='/' component={Login} />
                <Route exact path='/register' component={Register} />
                <Route exact path='/forgotpassword' component={ForgotPassword} />
                <Route exact path='/dashboard' component={() => <Dashboard menu={this.state.menuList} />} />
                <Route path='/dashboardpage' component={() => <DashboardPage history={History} menu={this.state.menuList} />} />
            </Router>
        );
    }
}

export default MainPage;