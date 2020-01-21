
import axios from 'axios';
const KEY = 'AIzaSyCU3XH34H94CdcILVbSCIDljAYdvVPY4vs';

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
        maxResults: 12,
        key: KEY
    };
    return config;
});

export default instance; 