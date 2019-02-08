import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com', 
    headers: {
        Authorization: 
            'Client-ID 0bebbca34b7bc6e376686b18833cd7a02a3b86a67a2d3381b7210a43c7e6952a' 
    }
});
