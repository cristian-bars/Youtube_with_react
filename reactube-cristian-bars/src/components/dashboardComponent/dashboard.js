import React from 'react';
import youtube from '../../api/youtube';
import Searchbar from '../searchbarComponent/searchbar';
import VideoDetail from '../videoDetailComponent/videoDetail';
import VideoList from '../videoListComponent/videoList';
import { Container, YoutubeVideos } from './dashboardStyles';

class Dashboard extends React.Component {
    state = {
        videos: [],
        selectedVideo: null
    }
    handleSubmit = async (termFromSearchBar) => {
        debugger
        const response = await youtube.get('/search', {
            params: {
                q: termFromSearchBar
            }
        })
        this.setState({
            videos: response.data.items
        })
    };
    handleVideoSelect = (video) => {
        this.setState({selectedVideo: video})
    }
    
    render() {
        return (
            <Container>
                <Searchbar handleFormSubmit={this.handleSubmit}/>
                    <YoutubeVideos>
                            <VideoDetail video={this.state.selectedVideo}/>
                            <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos}/>
                    </YoutubeVideos>
            </Container>
        )
    }
}

export default Dashboard