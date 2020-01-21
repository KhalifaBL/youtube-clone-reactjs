import React from 'react';
import VideoItem from './VideoItem';
import './VideoList.css';

const VideoList = ({ videoList, onVideoSelect }) => {


    const myvideos = videoList.map((video) => {
        return <VideoItem onVideoSelect={onVideoSelect} key={video.id.videoId} video={video}></VideoItem>
    });
    const firstVid= myvideos[0];
    myvideos.shift();
    return (
    <div>
        <div className="header-of-list">Up next</div>
        <div className="ui">{firstVid}</div>
        <hr className="separator"/>
       
        <div className="ui">{myvideos}</div>
    </div>);
}
export default VideoList;