import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { UserTextInput } from '../viewItems/userTextInput';
import { loginAction } from '../../store/actions/index';
import GeneralLink from '../viewItems/generalLink';
import resetMessage from '../../utils/resetMessage';

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

        //possible whilst attempting to login we play a loading ajimation
    }

    render() {
        const {email, password} = this.state;
        return (
            <div>
                {this.props.activeView === "lobby" ? <Redirect push to="/lobby" />
                    :
                    (
                        <div>
                            <UserTextInput handleChange={this.handleChange} value={email} label="Email" type="email" />
                            <UserTextInput handleChange={this.handleChange} value={password} label="Password" type="password" />
                            <input type="submit" onClick={this.onClick} value="Login"/>
                            <p>{this.props.message && this.props.message}</p>
                            <GeneralLink path="register" text="Register" />
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
        message: state.genericMessage
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