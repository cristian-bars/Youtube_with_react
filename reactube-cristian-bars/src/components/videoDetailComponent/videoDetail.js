import React from 'react';
import {VideoIframe, VideoDetailDiv, VideoInfo} from './videoDetailStyles';

const VideoDetail = ({video}) => {
    if (!video) {
        return <div>Loading ...</div>;
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    console.log(typeof(video));
    return (
        <VideoDetailDiv>
                <VideoIframe src={videoSrc} allowFullScreen title='Video player'/>
                <VideoInfo>
                    <h4 className='ui header'>{video.snippet.title}</h4>
                    <p>{video.snippet.description}</p>
                </VideoInfo>
                
        </VideoDetailDiv>

    )
}

export default VideoDetail;