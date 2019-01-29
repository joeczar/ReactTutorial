import React from 'react';

const ErrorMessage = (props) => {
    console.log(props);
    return (
        <div className="massive ui negative message">
            <i className="close icon"></i>
            <div className="header">
                We're sorry something went wrong
            </div>
            <p>{props.message}</p>
        </div>
    );
}

export default ErrorMessage;