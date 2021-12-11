import Chart from "../../components/chart/Chart"
import "./home.css"
import { userData_1, 
        userData_2, 
        userData_3, 
        userData_4, 
        userData_5, 
        userData_6, 
        userData_7, 
        userData_8, 
        userData_9, 
        userData_10 } from "../../data"
import WidgetLg from "../../components/widgetLg/WidgetLg"
import Sidebar from "../../components/sidebar/Sidebar"
import React, { Component } from 'react';

const dataItems = [userData_1, userData_2, userData_3, userData_4, userData_5, userData_6, userData_7, userData_8, userData_9, userData_10];
var item;

export default class Home extends Component {
    constructor(props) {
        super(props);
        item = dataItems[Math.floor(Math.random()*dataItems.length)];
    }

    render() {
        return (
            <>
            <Sidebar/>
            <div className="home">
                <Chart data={item} title="Overview About Player's Performance" grid dataKey="Active Players"/>
                <div className="homeWidgets">
                    <WidgetLg/>
                </div>
            </div>
            </>
        )
    }
  }
 