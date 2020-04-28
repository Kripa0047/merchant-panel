import React, { Component } from 'react';
// importing css as styles
import styles from './HappyDeals.module.css';
// importing sub header
import SubHeader from '../../Components/SubHeader/subHeader';
// importing cards
import DealsCard from '../../Components/DealCards/dealCards';
// importing list
import List from '../../Components/List/list';
// importing CreateDeal
import CreateDeal from '../../Components/CreateDeal/CreateDeal';
// importing loader
// import Loader from '../../Components/Loader/loader';
// importing SetDealPopup
// import SetDealPopup from '../../Components/SetDealPopup/setDealPopup';

class HappyDeals extends Component {
    state = {
        menu: [],
        selectedMenuIndex: 0,
        render: 'cards',
        tags: [],
        dealDurationHappyHour: true,
        dealDurationDay: false,

        boxesList: [true, false, false],
        menuCards: [],
        showApprovePopup: false,
        popUpIndex: null,
        allTags: false,

        createDealFormShow: false
    }

    // initilize
    componentDidMount() {
        let menu = [
            { name: "Pending" },
            { name: "Rejected" },
            { name: "Active" },
            { name: "All" }
        ];

        let menuCards = [
            true,
            true,
            true,
            true,
            true,
            true
        ];

        let tags = [
            { selected: false, tagName: 'Cake' },
            { selected: false, tagName: 'Beer' },
            { selected: false, tagName: 'Wine' },
            { selected: false, tagName: 'Biscuit' },
            { selected: false, tagName: 'Veg' },
            { selected: false, tagName: 'Non-veg' },
            { selected: false, tagName: 'Plain' },
            { selected: false, tagName: 'Fast Food' },
            { selected: false, tagName: 'Fried' },
            { selected: false, tagName: 'Egged' },
            { selected: false, tagName: 'Oily' },
            { selected: false, tagName: 'Baked' },
            { selected: false, tagName: 'Rosted' },
            { selected: false, tagName: 'Boiled' },
        ]

        this.setState({
            menu,
            menuCards,
            tags
        });
    }

    // ==================TO REQUEST MENU DATA==================
    requestMenuData = (index) => {
        let boxesList = [...this.state.boxesList];
        let render = 'cards';
        if (index !== 0) {
            boxesList = [false, false, false];
        }
        else {
            boxesList = [true, false, false];
        }
        if (index === 3) {
            render = 'list';
        }


        this.setState({
            selectedMenuIndex: index,
            boxesList,
            render
        });

        // API CALL WILL BE MADE TO REQUEST DATA
    }

    // =====================ON ACCEPT=========================
    onAccept = (index) => {
        console.log("Accept: ", index);

        this.setState({
            showApprovePopup: true,
            popUpIndex: index
        });
    }

    // ==================ON APPROVE===========================
    onApprove = () => {
        let index = this.state.popUpIndex;
        console.log("Approve: ", index);

        this.setState({
            showApprovePopup: false
        });
    }

    // =========================ON TAGS SELECT=================
    onTagSelect = (index) => {
        let tags = [...this.state.tags];
        let allTags = this.state.allTags;
        if(index === -1){
            let boolVal = true;
            if(allTags){
                boolVal = false;
            }
            allTags = !allTags;
            tags.forEach(element => {
                element.selected = boolVal;
            });
        }
        else{
            tags[index].selected = !tags[index].selected;
            if(allTags){
                allTags = false;
            }
        }
        
        this.setState({
            tags,
            allTags
        });
    }

    render() {
        return (
            <div>
                {/* loader */}
                {/* <Loader isLoader={false} /> */}
                {/* SetDealPopup */}
                {/* <SetDealPopup 
                    isShow={this.state.showApprovePopup}
                    onCancel={()=>this.setState({showApprovePopup: false})}
                    onApprove={this.onApprove}
                /> */}

                {/* CreateDeal */}
                {
                    this.state.createDealFormShow
                        ?
                        <CreateDeal
                            onClose={() => this.setState({ createDealFormShow: false })}
                            tags={this.state.tags}
                            onTagSelect={this.onTagSelect}
                            allTags={this.state.allTags}
                            dealTimeHour={this.state.dealDurationHappyHour}
                            dealTimeDay={this.state.dealDurationDay}
                            hourSelect={()=>this.setState({dealDurationHappyHour: true, dealDurationDay: false})}
                            daySelect={()=>this.setState({dealDurationHappyHour: false, dealDurationDay: true})}
                        />
                        :
                        null
                }

                <SubHeader
                    menu={this.state.menu}
                    selectedMenuIndex={this.state.selectedMenuIndex}
                    requestMenuData={this.requestMenuData}
                />
                {
                    this.state.boxesList[0]
                        ?
                        <div className={styles.createContainer}>
                            <div onClick={() => this.setState({ createDealFormShow: true })}>Create Deal</div>
                        </div>
                        :
                        null
                }
                <div className={styles.cardsContainer}>

                    {
                        this.state.render === 'cards'
                            ?
                            this.state.menuCards.map((item, index) => {
                                return (
                                    <DealsCard
                                        key={index}
                                        index={index}
                                        boxes={true}
                                        boxesList={this.state.boxesList}
                                        onAccept={this.onAccept}
                                    />
                                )
                            })
                            :
                            null
                    }

                    {
                        this.state.render === 'list'
                            ?
                            <List />
                            :
                            null
                    }

                </div>
            </div>
        );
    }
}

export default HappyDeals;