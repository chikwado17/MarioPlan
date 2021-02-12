import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../redux/auth/actions/authAction';



const mapDispatchToProps = {
    signIn
}

class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    };


    handleFormSubmit = (e) => {
        e.preventDefault();

        (this.props.signIn(this.state));
    }


    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleFormSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Sign In</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" onChange={this.handleInputChange} id="email"/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" onChange={this.handleInputChange} id="password"/>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Login</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default connect(null, mapDispatchToProps)(SignIn);
