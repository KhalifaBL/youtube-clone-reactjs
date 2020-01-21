import React from 'react';
import YouTube from 'react-youtube';
import './VideoDetail.css'

const VideoDetail = ({ selectedVideo }) => {
    const opts = {
        width: '951px',
        height: '535px',
        playerVars: {
            autoplay: 1
        }

    }
    const handleDate=(date)=>{
        var day = date.slice(9, 10);
        var mo = date.slice(6, 7);
        var year = date.slice(0, 4);
        var month = "";
        switch(mo){
            case "1": 
            month = "Janv.";
            break;
            case "2":
            month = "Feb.";
            break;
            case "3": 
            month = "Mar.";
            break;
            case "4":
            month = "Apr.";
            break;
            case "5": 
            month = "May.";
            break;
            case "6":
            month = "Jun.";
            break;
            case "7": 
            month = "Jul.";
            break;
            case "8":
            month = "Aug.";
            break;
            case "9": 
            month = "Sep.";
            break;
            case "10":
            month = "Oct.";
            break;
            case "11": 
            month = "Nov.";
            break;
            case "12":
            month = "Dec.";
            break;
            default: month="Janv.";
            break;

        }
       
       
        return (day +" "+ month+" " + year);
    }
    
    
    if (!selectedVideo) {
        return <div> Loading ...</div>
    } else {

        return (
            <div>
                 <div className="vid-container">
                <YouTube
                    videoId={selectedVideo.id.videoId}                  // defaults -> null
                    id={selectedVideo.id.videoId}                       // defaults -> null
                    className="youtube-vid"                // defaults -> null
                    opts={opts}
                />
                </div>
               
              
                <div className="youtube-title">{selectedVideo.snippet.title}</div>
                <div className="published-time">{handleDate(selectedVideo.snippet.publishedAt)}</div>
                <div className="tag">This YouTube clone is realized by Khalifa Ben Lazrek ©</div>
            </div>
        );
    }

}
export default VideoDetail;