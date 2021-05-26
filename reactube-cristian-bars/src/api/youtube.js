import axios from 'axios';
const KEY = 'AIzaSyBlGMpclOFNkKhjXa9MQWMpe1JnccEGfO4';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})