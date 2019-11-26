import React from 'react';
import YouTube from 'react-youtube';
import './VideoDetail.css'

const VideoDetail = (props) => {
    const opts = {
        width: '100%',
        height: '500',
        playerVars: {
            autoplay: 1
        }

    }
    const myvideos = props.videoList.map((video) => {
        return <div>
            <YouTube
                videoId={video.id.videoId}                  // defaults -> null
                id={video.id.videoId}                       // defaults -> null
                className="youtube-vid"                // defaults -> null
                opts={opts}
            />
            <div className="youtube-title">{video.snippet.title}</div>
        </div>
    });

    return (
        <div> {myvideos[0]}</div>
    );
}
export default VideoDetail;