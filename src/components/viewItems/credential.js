import React from 'react';

export const Credential = (props) => {
    const {key, password} = props;
    return (
        <div>
            <h1>{key}<span>:</span>{password}</h1>    
        </div>
    )
}