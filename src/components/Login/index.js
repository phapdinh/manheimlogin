import React from 'react';

import PropTypes from 'prop-types';

import './Login.css';

class Login extends React.Component {
    static propTypes = {
        onSubmit: PropTypes.func,
        errorLogin: PropTypes.bool
    }

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
            <input type="password" value={this.state.password} placeholder="Password" onChange={this.handlePassword} />
            {errorLogin && <div className="alert_error">Login Failure</div>}
            <button type="button" onClick={() => onSubmit(this.state.username, this.state.password)} className="button">Sign In</button>
        </form>
    }
}

export default Login;