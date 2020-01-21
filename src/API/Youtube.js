
import axios from 'axios';
const KEY = process.env.REACT_APP_API_KEY;

const instance = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
});

instance.interceptors.request.use(config => {
    config.params = {
        // spread the request's params
        ...config.params,
        // add your default ones
        part: 'snippet',
        order:'relevance',
        headers: {referer: 'https://khalifabl.github.io/youtube-clone-reactjs/'},
        maxResults: 12,
        key: KEY
    };
    return config;
});

export default instance; 