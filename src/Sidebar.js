import React from 'react';
import './Sidebar.css'
import SidebarOption from './SidebarOption';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InboxIcon from '@mui/icons-material/Inbox';
import { Button } from '@mui/material';
import Diversity2Icon from '@mui/icons-material/Diversity2';
//declare your functions below

function Sidebar() {
  return (
    <div className='sidebar'>
    
    {/* Conquest Icon */}
    <Diversity2Icon className='sidebar_conquest_icon' />

    {/* options */}
    <SidebarOption Icon={HomeIcon} text="Home"/>
    <SidebarOption Icon={SearchIcon} text="Explore"/>
    <SidebarOption Icon={NotificationsIcon} text="Notifications"/>
    <SidebarOption Icon={InboxIcon} text="Inbox"/>
    <SidebarOption Icon={AccountCircleIcon} text="Profile"/>
    <SidebarOption Icon={BookmarksIcon} text="BookMarks"/>
    <SidebarOption Icon={MoreHorizIcon} text="More"/>
  
    {/* button */}
  <Button variant='outlined' className='sidebar_tweet' fullWidth>Share</Button>

    </div>
  ) 
}

export default Sidebar
