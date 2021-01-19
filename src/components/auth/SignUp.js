import React, { Component } from 'react'

class SignUp extends Component {
    state = {
        email: '',
        password: '',
        firstname: '',
        lastname: ''
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    };


    handleFormSubmit = (e) => {
        e.preventDefault();

        console.log(this.state);
    }


    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleFormSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Sign Up</h5>
                
                    <div className="input-field">
                        <label htmlFor="firstname">FirstName</label>
                        <input type="text" onChange={this.handleInputChange} id="firstname"/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="lastname">LastName</label>
                        <input type="text" onChange={this.handleInputChange} id="lastname"/>
                    </div>

                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" onChange={this.handleInputChange} id="email"/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" onChange={this.handleInputChange} id="password"/>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignUp;
