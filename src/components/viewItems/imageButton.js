import React from 'react';

export const ImageButton = (props) => {
    const {iconPath, onClick} = props;
    return (
        <div>
            <input type="image" alt={iconPath} src={iconPath} onClick={onClick} />
        </div>
    )
}