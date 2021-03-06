import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
import ErrorMessage from './ErrorMessage';

class App extends React.Component {
    state = { lat: null, errorMessage: '', time: new Date().toLocaleTimeString() };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({ lat: position.coords.latitude }),
            (err) => this.setState({ errorMessage: err.message })
        );
        setInterval(() => {
            this.setState({time: new Date().toLocaleTimeString()})
        }, 1000)
    }

    renderContent() {
        if (this.state.errorMessage && !this.state.lat) {
            return <ErrorMessage message={this.state.errorMessage} />;
        }
   
        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />;
        }
   
        return <Spinner message='Please accept location request' />
       }
    
   
    //react says we have to define render!!
   render() {
     return (
        <div>
            {this.renderContent()}
        </div>
    );
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));