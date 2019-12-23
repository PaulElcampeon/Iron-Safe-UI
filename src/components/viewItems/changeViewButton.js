import React from 'react';


const ChangeViewButton = (props) => {
    const {onClick, dataRole, value} = props;
    return (
        <div>
            <button onClick={onClick} data-role={dataRole}>{value}</button>
        </div>
    )
} 

export default ChangeViewButton;