import React from 'react';
import { NavLink } from 'react-router-dom';


const SignOutLinks = () => {
    return (
        <ul className="right hide-on-med-and-down">
            <li>
                <NavLink to="/signUp">SignUp</NavLink>
            </li>
            <li>
                <NavLink to="/signIn">LogIn</NavLink>
            </li>
        </ul>
    )
}

export default SignOutLinks;