import React from 'react'
import { Link } from 'react-router-dom'

const GeneralLink = (props) => {
    const { path, text } = props;
    return (
        <Link className={"links"} to={`/${path}`}>
            {text}
        </Link>
    )
}
export default GeneralLink