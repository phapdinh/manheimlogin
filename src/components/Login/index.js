import React from 'react';

import './Login.css';

class Login extends React.Component {
    state = { username: '', password: '' }

    handleUserName = (event) => {
        this.setState({ username: event.target.value });
    }

    handlePassword = (event) => {
        this.setState({ password: event.target.value });
    }

    render() {
        const { onSubmit, errorLogin } = this.props;

        return <form className="form">
            <input type="text" value={this.state.username} placeholder="Username" onChange={this.handleUserName} />
            <br />
            <input type="password" value={this.state.password} placeholder="Password" onChange={this.handlePassword} />
            <br />
            {errorLogin && <div className="alert_error">Login Failure</div>}
            <button type="button" onClick={() => onSubmit(this.state.username, this.state.password)} className="button">Sign In</button>
        </form>
    }
}

export default Login;