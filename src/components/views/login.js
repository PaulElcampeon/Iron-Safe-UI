import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { UserTextInput } from '../viewItems/userTextInput';
import { loginAction } from '../../store/actions/index';
import resetMessage from '../../utils/resetMessage';
import CustomNavbar from '../viewItems/customNavbar';

export class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { email: "", password: "" }
        resetMessage();
    }

    handleChange = (e) => {
        let change = {}
        change[e.target.name] = e.target.value

        this.setState(change)
    }

    onClick = (e) => {
        const { email, password } = this.state;
        const credential = { 'email': email, 'password': password };

        this.props.attemptLogin(credential);

        this.setState({
            password:""
        })
    }

    render() {
        const {email, password} = this.state;
        return (
            <div>
                <CustomNavbar  history={this.props.history} subtitles={['login','register']}/>
                {this.props.activeView === "lobby" ? <Redirect push to="/lobby" />
                    :
                    (
                        <div className={'loginPanel'}>
                            <h1>Login</h1>
                            <UserTextInput handleChange={this.handleChange} value={email} label="Email" type="email" />
                            <UserTextInput handleChange={this.handleChange} value={password} label="Password" type="password" />
                            <input type="submit" onClick={this.onClick} value="Login"/>
                        </div>
                    )
                }
            </div>
        )
    }
}

export const mapStateToProps = (state) => {
    return {
        activeView: state.activeView,
    }
}

export const mapDispatchToProps = (dispatch) => {
    return {
        attemptLogin: (credential) => {
            dispatch(loginAction(credential));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);