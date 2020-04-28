import React, { Component } from 'react';
// importing css as styles
import styles from './Dashboard.module.css';
// importing Header
import Header from '../../Components/Header/header';
// importing dashboard Menu cards
import MenuCard from '../../Components/DashboardMenuCard/dashboardMenuCard';

class Dashboard extends Component {
    state = {
        menu: null
    }

    componentDidMount() {
        let menu = this.props.menu;
        this.setState({ menu });
    }

    render() {
        return (
            <div className={styles.mainContainer}>
                <Header />
                <div className={styles.container}>
                    {
                        this.state.menu
                            ?
                            this.state.menu.map((item, index) => {
                                return (
                                    <MenuCard
                                        key={index}
                                        to={item.to}
                                        icon={item.icon}
                                        header={item.header}
                                        text={item.text}
                                    />
                                )
                            })
                            :
                            null
                    }
                </div>
            </div>
        );
    }
}

export default Dashboard;