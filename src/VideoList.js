import React from 'react';
import VideoItem from './VideoItem';
import './VideoList.css';

const VideoList = ({ videoList, onVideoSelect }) => {


    const myvideos = videoList.map((video) => {
        return <VideoItem onVideoSelect={onVideoSelect} key={video.id.videoId} video={video}></VideoItem>
    });
    myvideos.shift();
    return (<div className="ui relaxed divided list right-side-list">{myvideos}</div>);
}
export default VideoList;