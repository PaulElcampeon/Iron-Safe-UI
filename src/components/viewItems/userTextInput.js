import React from 'react';

export const UserTextInput = (props) => {
    const { handleChange, label, type, value } = props;

    return (
        <div>
            <label value={label}/>
            <input type={type} onChange={handleChange} name={label.replace(" ", "").toLowerCase()} value={value} />
        </div>
    )
}