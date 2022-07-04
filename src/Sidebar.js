import userEvent from '@testing-library/user-event';
import React from 'react';
import './Sidebar.css';
import SidebarRow from "./SidebarRow";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import ExpandMoreOutlined from "@material-ui/icons/ExpandMoreOutlined";

function Sidebar () {
  return (
    <div className="sidebar">
        <SidebarRow 
        title='Sapph'
        src={userEvent.photoURL} 
        />
        <SidebarRow 
        title='Covid Info'
        Icon={LocalHospitalIcon} 
        />

        <SidebarRow 
        Icon={EmojiFlagsIcon}
        title='Pages'
        />
        <SidebarRow 
        Icon={PeopleIcon}
        title='Friends'
        />
        <SidebarRow
         Icon={ChatIcon}
         title='Messenger'
         />
        <SidebarRow 
        Icon={StorefrontIcon}
        title='Pages'
        />
         <SidebarRow 
        Icon={VideoLibraryIcon}
        title='Videos'
        />
         <SidebarRow 
        Icon={ExpandMoreOutlined}
        title='Marketplace'
        />
    </div>
  )
}

export default Sidebar