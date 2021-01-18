import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SignInLinks from './SignInLinks';
import SignOutLinks from './SignOutLinks';

const Navbar = (props) => {
    const [ authenticated ] = useState('true');
    return (
       <nav>
            <div className="nav-wrapper">
                <div className="container">
                    <Link to="/" className="brand-logo">MarioPlan</Link>
                    {authenticated &&
                    <SignInLinks />}
                    {
                    <SignOutLinks  />}
                </div>
            </div>
       </nav>
    )
}
export default Navbar;