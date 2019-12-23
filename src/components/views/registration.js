import React from 'react';
import { connect } from 'react-redux';
import { UserTextInput } from '../viewItems/userTextInput';
import { registerAction } from '../actions/index';
import GeneralLink from '../viewItems/generalLink';

export class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = { email: "", confirmemail: "", password: "", confirmpassword: "" }
    }

    handleChange = (e) => {
        let change = {}
        change[e.target.name] = e.target.value

        this.setState(change)
    }

    onClick = (e) => {
        const { email, confirmemail, password, confirmpassword } = this.state;
        const registrationDetails = { 'email': email, 'confirmEmail': confirmemail, "password": password, "confirmPassword": confirmpassword };

        this.props.attemptRegistration(registrationDetails);

        //possible whilst attempting to register we play a loading ajimation
    }

    render() {
        return (
            <div>
                <UserTextInput handleChange={this.handleChange} label="Email" type="email" />
                <UserTextInput handleChange={this.handleChange} label="Confirm Email" type="email" />
                <UserTextInput handleChange={this.handleChange} label="Password" type="password" />
                <UserTextInput handleChange={this.handleChange} label="Confirm Password" type="password" />
                <input type="submit" onClick={this.onClick} />
                <GeneralLink path="login" text="login" />
            </div>
        )
    }
}

export const mapStateToProps = (state) => {
    return {
        activeView: state.activeView
    }
}

export const mapDispatchToProps = (dispatch) => {
    return {
        attemptRegistration: (credential) => {
            dispatch(registerAction(credential));
        }
    }
}

export default connect(mapDispatchToProps)(Register);