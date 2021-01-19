import React from 'react';
import { Link } from 'react-router-dom';
import SignInLinks from './SignInLinks';
import SignOutLinks from './SignOutLinks';

const Navbar = (props) => {
    return (
       <nav>
            <div className="nav-wrapper">
                <div className="container">
                    <Link to="/" className="brand-logo">MarioPlan</Link>
                    <SignInLinks />
                    <SignOutLinks  />
                </div>
            </div>
       </nav>
    )
}
export default Navbar;