import React from 'react';

import './Login.css';

class Login extends React.Component {
    state = { username: '', password: '' }

    handleUserName = (event, input) => {
        this.setState({ username: event.target.value });
    }

    handlePassword = (event, input) => {
        this.setState({ password: event.target.value });
    }

    render() {
        const { onSubmit } = this.props;

        return <form>
            <input type="text" value={this.state.username} placeholder="Username" onChange={this.handleUserName} />
            <br />
            <input type="password" value={this.state.password} placeholder="Password" onChange={this.handlePassword} />
            <br />
            <button type="button" onClick={() => onSubmit(this.state.username, this.state.password)}>Sign In</button>
        </form>
    }
}

export default Login;