import React from 'react';

export const UserTextInput = (props) => {
    const { handleChange, label, type, value } = props;

    return (
        <div>
            <input className={"textInputs"} type={type} onChange={handleChange} name={label.replace(" ", "").toLowerCase()} value={value} placeholder={type}/>
        </div>
    )
}