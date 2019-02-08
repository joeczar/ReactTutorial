import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
    onSearchSubmit(term) {
        axios.get('https://api.unsplash.com/search/photos', {
            params: { query: term },
            headers: {
                Authorization: 
                    'Client-ID 0bebbca34b7bc6e376686b18833cd7a02a3b86a67a2d3381b7210a43c7e6952a' 
            }
        }).then((response) => {
            console.log(response.data.results);
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