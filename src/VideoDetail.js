import React from 'react';
import YouTube from 'react-youtube';
import './VideoDetail.css'

const VideoDetail = ({ selectedVideo }) => {
    const opts = {
        width: '100%',
        height: '500',
        playerVars: {
            autoplay: 1
        }

    }
    if (!selectedVideo) {
        return <div> Loading ...</div>
    } else {
        return (
            <div>
                <YouTube
                    videoId={selectedVideo.id.videoId}                  // defaults -> null
                    id={selectedVideo.id.videoId}                       // defaults -> null
                    className="youtube-vid"                // defaults -> null
                    opts={opts}
                />
                <div className="youtube-title">{selectedVideo.snippet.title}</div>
                <p >{selectedVideo.snippet.description}</p>
            </div>
        );
    }

}
export default VideoDetail;