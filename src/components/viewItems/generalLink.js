import React from 'react'
import { Link } from 'react-router-dom'

const GeneralLink = (props) => {
    const { path, text } = props;
    return (
        <Link to={`/${path}`}>
            {text}
        </Link>
    )
}
export default GeneralLink