import React from 'react';

import SidebarRow from './SidebarRow';
import './Sidebar.css';
// 아이콘
import WhatshotSharpIcon from '@mui/icons-material/WhatshotSharp';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import SubscriptionsSharpIcon from '@mui/icons-material/SubscriptionsSharp';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';

function Slidebar() {
  return (
    <div className="Sidebar">
        <SidebarRow selected Icon={HomeSharpIcon} title="Home" />
        <SidebarRow Icon={WhatshotSharpIcon} title="Trending" />
        <SidebarRow Icon={SubscriptionsSharpIcon} title="Subscription" />
        <hr />
        <SidebarRow Icon={VideoLibraryIcon} title="Library" />
        <SidebarRow Icon={HistoryIcon} title="History" />
        <SidebarRow Icon={OndemandVideoIcon} title="Your videos" />
        <SidebarRow Icon={WatchLaterIcon} title="Watch Later" />
        <SidebarRow Icon={ThumbUpAltIcon} title="Liked video" />
        <SidebarRow Icon={ExpandMoreOutlinedIcon} title="Show more" />
        <hr />


    </div>
  );
}

export default Slidebar;
