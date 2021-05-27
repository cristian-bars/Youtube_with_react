import React from 'react';
import youtube from '../../api/youtube';
import Searchbar from '../searchbarComponent/searchbar';
import VideoDetail from '../videoDetailComponent/videoDetail';
import VideoList from '../videoListComponent/videoList';

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
            <div className="ui container">
                <Searchbar handleFormSubmit={this.handleSubmit}/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo}/>
                        </div>
                        <div className="five wide column">
                            <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard