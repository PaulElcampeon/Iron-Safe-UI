import React from 'react';
import { addCredentialAction } from '../actions/index';
import { connect } from 'react-redux';

export class CreateCredentialView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            key: "",
            value: ""
        }
    }

    handleChange = (e) => {
        let change = {}
        change[e.target.name] = e.target.value
        
        this.setState(change)
    }

    onClick = (e) => {
        const {key, value} = this.state;
        const credential = {'key': key, 'value':value};
        
        this.props.addCredential(credential);
    }

    render(){
        return (
            <div>
                <h1>Key</h1>
                <input type='text'name='key' />
                <h1>Value</h1>
                <input type='text' name='value' />
                <input type='submit' value="Create" onChange={this.handleChange} onClick={this.onClick}/>
            </div>
        )
    }
}

export const mapDispatchToProps = (dispatch) => {
    return {
        addCredential: (credential) => {
            dispatch(addCredentialAction(credential))
        }
    }
}

export default connect(mapDispatchToProps)(CreateCredentialView)