import "./sidebar.css";
import { Link } from 'react-router-dom';
import ProfileImage from '../../images/profile_img.jpg';

import {
    StarOutline,
    BorderColor,
    DonutLarge,
    AllInclusive,
    BubbleChart,
    Settings,
  } from "@material-ui/icons";

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <div className="sidebarUserProfile">
                    <img src={ProfileImage} className="sidebarUserImg" alt="sidebarUserImgAlt"/>
                    <br/>
                    <span className="sidebarUserName">Farasat Khan</span>
                    <h4 className="sidebarUserProfileLink">My Profile</h4>
                    </div>
                    <hr className="sidebarLineBreak"></hr>
                </div>
                <div className="sidebarMenu">
                    <h2 className="sidebarTitle">Menu</h2>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <StarOutline className="sidebarIcon" />
                            <Link to="/rtip" className="redirectLink">RTIP</Link>
                        </li>
                        <li className="sidebarListItem">
                            <BorderColor className="sidebarIcon" />
                            <Link to="/cs" className="redirectLink">Generate Report</Link>
                        </li>
                        <li className="sidebarListItem">
                        <DonutLarge className="sidebarIcon" />
                        <Link to="/home" className="redirectLink">Analyze</Link>
                        </li>
                        <li className="sidebarListItem">
                        <AllInclusive className="sidebarIcon" />
                        <Link to="/cs" className="redirectLink">VR Mode</Link>
                        </li>
                        <li className="sidebarListItem">
                        <BubbleChart className="sidebarIcon" />
                        <Link to="/cs" className="redirectLink">Analytics</Link>
                        </li>
                        <li className="sidebarListItem">
                        <Settings className="sidebarIcon" />
                        <Link to="/cs" className="redirectLink">Settings</Link>
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu LogoutBtn">
                    <Link to="/login" className="logoutLink"><button class="sidebarLogoutBtn">Log out</button></Link>
                </div>
            </div>
        </div>
    )
}
