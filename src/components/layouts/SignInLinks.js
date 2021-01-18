import React from 'react';
import { NavLink } from 'react-router-dom';


const SignInLinks = () => {
    return (
        <ul className="right hide-on-med-and-down">
            <li>
                <NavLink to="/">New Project</NavLink>
            </li>
            <li>
                <NavLink to="/">Log Out</NavLink>
            </li>
            <li>
                <NavLink to="/" className="btn btn-floating pink lighten-1">NN</NavLink>
            </li>
        </ul>
    )
}

export default SignInLinks;