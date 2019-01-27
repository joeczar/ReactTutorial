// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import faker from'faker';
import CommentDetail from './CommentDetail';

// Create a react component
const App = () => {
 
  return (
    <div className="ui container comments">
        <CommentDetail author="Sam" timeAgo="Today at 4:45PM" avatar={faker.image.avatar()} usrComment="Eat poo!" />
        <CommentDetail author="Alex"  timeAgo="Today at 2:00AM" avatar={faker.image.avatar()} usrComment="That's fan-fucking-tastic!"  />
        <CommentDetail author="Jane"  timeAgo="Yesterday at 5:00PM" avatar={faker.image.avatar()} usrComment="I eat potatoes."  />
    </div>
  ); 
};

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector('#root')); 