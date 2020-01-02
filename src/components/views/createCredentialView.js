import React from 'react';
import { addCredentialAction } from '../../store/actions/index';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import GeneralLink from '../viewItems/generalLink';
import resetMessage from '../../utils/resetMessage';

export class CreateCredentialView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            key: "",
            value: ""
        }
        resetMessage();
    }

    handleChange = (e) => {
        let change = {}
        change[e.target.name] = e.target.value
        
        this.setState(change)
    }

    onClick = (e) => {
        const {key, value} = this.state;
        const credential = {'key': key, 'value': value};
        
        this.props.addCredential(credential);

        this.setState({
            key:"",
            value:""
        })
    }

    render(){
        const { loggedIn } = this.props
        return (
            <div>
                {!loggedIn ? <Redirect push to="/"/> 
                :
                <div>
                <h1>Key</h1>
                <input type='text'name='key' onChange={this.handleChange}/>
                <h1>Value</h1>
                <input type='text' name='value' onChange={this.handleChange}/>
                <input type='submit' value="Create" onClick={this.onClick}/>
                {this.props.message && this.props.message}
                <GeneralLink path="lobby" text="Lobby" />
                </div>
                }
            </div>
        )
    }
}

export const mapStateToProps = (state) => {
    return {
        message: state.genericMessage,
        loggedIn: state.loggedIn
    }
}

export const mapDispatchToProps = (dispatch) => {
    return {
        addCredential: (credential) => {
            dispatch(addCredentialAction(credential))
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateCredentialView)