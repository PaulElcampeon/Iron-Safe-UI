import React from 'react';

const GeneralLink = (props) => {
    const { value } = props
    return (
        <div>
            <a href="/">
                <h1>{value}</h1>
            </a>
        </div>
    )
} 

export default GeneralLink;