import axios from 'axios';

const KEY = 'AIzaSyC_KwcVWhbw9ABFCi30trar3JDxd483-Vs';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
    }
});