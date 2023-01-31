import React from 'react';
import { Avatar } from '@mui/material';

function VideoCard(props) {
    const {image, title, channel, views, timestamp, channelImage} = props

  return (
    <div>
        <img src={image} alt=""/>
        <div className='video_info'>
            <Avatar 
            className='video_avatar' 
            alt={channel} src={channelImage} 
            />
            <div className='video_text'>
                <h4>{title}</h4>
                <p>{channel}</p>
                <p>
                    {views} {timestamp}
                </p>
            </div>
        
        </div>
    </div>
  );
}

export default VideoCard;
