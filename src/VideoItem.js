import React from 'react';
import './VideoList.css';

const VideoItem = ({ video }) => {
    const styleVideo = {
        width: '176'
    }
    return (
        <div className="item">
            <div className='left-icon'><img className='thumbnail' style={{ width: 175, height: 101 }} src={video.snippet.thumbnails.high.url}></img></div>
            <div className='right-title'>
                <div className='title'>{video.snippet.title}</div>

                <div className='channel-title'>{video.snippet.channelTitle}</div>
            </div>
        </div>);
}
export default VideoItem;