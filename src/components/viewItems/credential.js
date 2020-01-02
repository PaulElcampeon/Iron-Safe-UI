import React from 'react';

export const Credential = (props) => {
    const {keyTag, valueTag} = props;
    return (
        <div>
            <h1>{keyTag}<span>:</span>{valueTag}</h1>    
        </div>
    )
}

export default Credential;