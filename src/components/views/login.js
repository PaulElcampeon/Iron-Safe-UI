import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { UserTextInput } from '../viewItems/userTextInput';
import { loginAction } from '../actions/index';
import GeneralLink from '../viewItems/generalLink';


export class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { email: "", password: "" }
    }

    handleChange = (e) => {
        let change = {}
        change[e.target.name] = e.target.value

        this.setState(change)
    }

    onClick = (e) => {
        const { key, value } = this.state;
        const credential = { 'key': key, 'value': value };

        this.props.attemptLogin(credential);

        //possible whilst attempting to login we play a loading ajimation
    }

    render() {
        return (
            <div>
                {this.props.activeView === "lobby" ? (<Redirect push to="/lobby" />)
                    :
                    (
                        <div>
                            <UserTextInput handleChange={this.handleChange} label="Email" type="email" />
                            <UserTextInput handleChange={this.handleChange} label="Password" type="password" />
                            <input type="submit" onClick={this.onClick} />
                            {this.props.message && this.props.message}
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

export default connect(mapDispatchToProps)(Login);