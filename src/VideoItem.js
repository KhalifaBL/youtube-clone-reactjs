import React from 'react';
import './VideoList.css';

const VideoItem = ({ video, onVideoSelect }) => {
   console.log(video)
    return (
        <div className="item" onClick={() => onVideoSelect(video)} >
            <div className='left-icon'><img className='thumbnail' style={{ width: 200, height: 120 }} src={video.snippet.thumbnails.high.url}></img></div>
            <div className='right-title'>
                <div className='mytitle'>{video.snippet.title}</div>
                <div className='channel-title'>{video.snippet.channelTitle}</div>
            </div>
        </div>);
}
export default VideoItem;