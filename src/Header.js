import React from 'react'
import './Header.css';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import SearchIcon from '@mui/icons-material/Search';
import logo from './img/logo.png';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import { Avatar } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';

function Header() {
    return (
        <div className='header'>
           <div className='header_left'>
           <MenuSharpIcon />
           <img 
           className='header_logo'
           src={logo}
           alt=""
           />
           </div>

           <div className='header_input'>
            <input type='text' placeholder='Search'></input>
            <SearchIcon className='header_inputButton'/>
           </div>

            <div className='header_icons'>
            <VideoCallIcon/>
            <AppsIcon />
            <NotificationsIcon/>
            <Avatar>S</Avatar>
            </div>
        </div>
    )
}

export default Header
