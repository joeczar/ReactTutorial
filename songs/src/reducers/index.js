// Create Reducers
import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title:'No Scrubs', duration: '4:05' },
        { title:'Macerena', duration: '2:30' },
        { title:'I Want it t', duration: '3:15' },
        { title:'I Want it That Way', duration: '1:45' },
    ];
};
const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})