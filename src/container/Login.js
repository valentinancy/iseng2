import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
        }
        console.log(this.props.history)
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    handleLlogin = () => {
        if(this.state.username === "turon" && this.state.password === "turon123") {
            console.log('logged in')
            this.props.history.push(`/users`);
        } else {
            console.log('failed')
        }
    }
    
    render() {
        return (
            <div className="login-container">
                <div className="login-header">Login</div>
                <input className="login-input" name="username" type="text" value={this.state.username} placeholder="username" onChange={this.handleChange} />
                <br />
                <input className="login-input" name="password" type="password" value={this.state.password} placeholder="password" onChange={this.handleChange} />
                <br />
                <button className="login-btn" onClick={this.handleLlogin}>login</button>
            </div>
        )
    }
}

export default Login;