import React from 'react';
import { addCredentialDB } from '../../store/actions/index';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import resetMessage from '../../utils/resetMessage';
import { Link } from 'react-router-dom'

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
                <div className={'createPanel'}>
                    <h1 className={"panel-title"}>Create Credential</h1>
                    <input className={'textInputs'} type='text' name='key' value={this.state.key} onChange={this.handleChange} placeholder="key"/>
                    <input className={'textInputs'} type='text' name='value'  value={this.state.value} onChange={this.handleChange} placeholder="value"/>
                    <br />
                    <input type='submit' value="add" onClick={this.onClick}/>
                    <Link className={"links"} to={'/credentials'}>lobby</Link>
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
            dispatch(addCredentialDB(credential))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateCredentialView)