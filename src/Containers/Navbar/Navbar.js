import React, { Component } from 'react';
// importing css as styles
import styles from './Navbar.module.css';
// importing nav cards
import NavMenuCards from '../../Components/NavMenuCard/navMenuCard';
// importing icons
import arrowIcon from '../../asserts/icons/downArrowWhite.png';
// importing image
import mainIcon from '../../asserts/images/mainLogo.png';

class Navbar extends Component {
    state = {
        menu: [],
        selsectedIndex: null,
        shrinkMenu: false
    }

    componentDidMount() {
        let menu = [];
        if (this.props.menu) {
            menu = [...this.props.menu];
        }
        this.setState({ menu });
        this.selectedIndexHandler();
    }

    // ========TO HIGH LIGHT SELECTED MENU====================
    selectedIndexHandler = (index) => {
        let menuIndex = null;
        let url = this.props.history.location.pathname.split("/");
        for (let i = 0; i < url.length; i++) {
            if(url[i] === "dashboardpage"){
                url = url[i+1];
                break;
            }
        }
        //KEEP ADDING THE SUB URL
        let list = [
            "profile",
            "customer",
            "happydeals",
            "gallery",
            "hdpoints",
            "reviews"
        ];
        
        list.forEach((element, index) => {
            if(element === url){
                menuIndex = index;
            }
        });

        this.setState({
            selsectedIndex: menuIndex
        });
    }

    onShrinkMenu = () => {
        let root = this;
        let shrinkMenu = this.state.shrinkMenu;
        this.setState({
            shrinkMenu: !shrinkMenu
        }, () => {
            root.props.onToggleNav();
        });
    }

    render() {
        return (
            <div className={styles.container}>
                <div className={styles.menuLogoContainer} style={this.state.shrinkMenu ? { height: "41px" } : null}><div><img className={styles.menuLogo} src={mainIcon} alt="icon" /></div></div>
                {
                    this.state.menu.map((item, index) => {
                        return (
                            <NavMenuCards
                                OnClick={this.selectedIndexHandler}
                                index={index}
                                key={index}
                                to={item.to}
                                icon={item.icon}
                                header={item.header}
                                selsectedIndex={this.state.selsectedIndex}
                                shrinkMenu={this.state.shrinkMenu}
                            />
                        )
                    })
                }
                <div className={styles.toggleNav} onClick={this.onShrinkMenu}><img src={arrowIcon} style={this.state.shrinkMenu ? { transform: "rotate(-90deg)" } : null} alt="icon" /></div>
                <div className={styles.supportDiv}></div>
            </div>
        );
    }
}

export default Navbar;