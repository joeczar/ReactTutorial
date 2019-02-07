import React from 'react';
import Axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
    onSeaaxios.get('https://api.unsplash.com/search/photos', {
        params: { query: term },
        headers: {
            Authorization: 'Client-ID 0bebbca34b7bc6e376686b18833cd7a02a3b86a67a2d3381b7210a43c7e6952a' 
        }
    });
}

    render() { 
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
            </div>
        );
    }
}

export default App;