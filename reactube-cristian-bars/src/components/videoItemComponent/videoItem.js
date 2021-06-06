import React from 'react';
import {VideoItemdiv, VideoImg, VideoContent, VideoTitle} from './videoItemStyles'

const VideoItem = ({video , handleVideoSelect}) => {
    return (
        <VideoItemdiv onClick={ () => handleVideoSelect(video)}>
            <VideoImg src={video.snippet.thumbnails.medium.url} alt={video.snippet.description}/>
            <VideoContent>
                <VideoTitle>{video.snippet.title}</VideoTitle>
            </VideoContent>
        </VideoItemdiv>
    )
};
export default VideoItem;