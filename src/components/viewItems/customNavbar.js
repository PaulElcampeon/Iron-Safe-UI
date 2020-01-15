import React from 'react';
import NavbarItem from './navbarItem';

export const CustomNavbar = (props) => {
    const {subtitles} = props;

    return (
        <div className={"navbar"}>
            <div className={"navbarTitle"}>Iron-Safe</div>
            {subtitles.map((subtitle) => <NavbarItem  history={props.history} key={subtitle} itemName={subtitle}/>)} 
        </div>
    )
}

export default CustomNavbar;