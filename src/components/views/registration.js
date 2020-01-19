import React, {Component} from 'react';
import { connect } from 'react-redux';
import { UserTextInput } from '../viewItems/userTextInput';
import { registerAction } from '../../store/actions/index';
import resetMessage from '../../utils/resetMessage';
import { Link } from 'react-router-dom'

export class Register extends Component {
    constructor(props) {
        super(props);
        this.state = { email: "", confirmemail: "", password: "", confirmpassword: "" }
        resetMessage();
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
        this.setState({
            password: "", 
            confirmpassword: "" 
        })
    }

    render() {
        const { email, confirmemail, password, confirmpassword} = this.state;
        return (
            <div>
                <div className={"registrationPanel"}>
                    <h1 className={"panel-title"}>Registration</h1>
                    <UserTextInput handleChange={this.handleChange} label="Email" value={email} type="email" />
                    <UserTextInput handleChange={this.handleChange} label="Confirm Email" value={confirmemail} type="email" />
                    <UserTextInput handleChange={this.handleChange} label="Password" value={password} type="password" />
                    <UserTextInput handleChange={this.handleChange} label="Confirm Password" value={confirmpassword} type="password" />
                    <input type="submit" onClick={this.onClick} value="Register"/>
                    <Link className={"links"} to={'/login'}>Login</Link>
                </div>
            </div>
        )
    }
}

export const mapStateToProps = (state) => {
    return {
    }
}

export const mapDispatchToProps = (dispatch) => {
    return {
        attemptRegistration: (credential) => {
            dispatch(registerAction(credential));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);