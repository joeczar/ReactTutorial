import React from 'react';

const Spinner = (props) => {
    return (
            <div className="ui active dimmer">
                <div className="ui huge text loader">{props.message}</div>
            </div>
    );
}

Spinner.defaultProps = {
    message: 'Hold yer horses, pardner...'
}

export default Spinner;