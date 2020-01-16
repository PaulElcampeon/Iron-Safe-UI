import React from 'react';
import { addCredentialDB, updateActiveView } from '../../store/actions/index';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import resetMessage from '../../utils/resetMessage';
import CustomNavbar from '../viewItems/customNavbar';

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
        this.props.updateSelectedView();
        const { loggedIn } = this.props
        return (
            <div>
                <CustomNavbar  history={this.props.history} subtitles={['lobby', 'add-credential','logout']}/>
                {!loggedIn ? <Redirect push to="/"/> 
                :
                <div className={'createPanel'}>
                    <h1>Create Credential</h1>
                    <input className={'textInputs'} type='text' name='key' value={this.state.key} onChange={this.handleChange} placeholder="key"/>
                    <input className={'textInputs'} type='text' name='value'  value={this.state.value} onChange={this.handleChange} placeholder="value"/>
                    <br />
                    <input type='submit' value="add" onClick={this.onClick}/>
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
        },
        updateSelectedView: () => {
            dispatch(updateActiveView("add-credential"))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateCredentialView)