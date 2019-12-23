import React from 'react';

export const ImageButton = (props) => {
    const {iconPath, onClickIcon} = props;
    return(
        <div>
            <input type="image" alt={iconPath} src={iconPath} onClick={onClickIcon} />
        </div>
    )
}