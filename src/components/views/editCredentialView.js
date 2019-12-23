import React from 'react';
import { editCredentialAction } from '../actions/index';
import { connect } from 'react-redux';


export class EditCredentialView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            key: "",
            value: ""
        }
    }

    componentDidMount = () => {
        this.setState({
            key: this.props.key,
            value: this.props.value
        })
    }

    handleChange = (e) => {
        let change = {}
        change[e.target.name] = e.target.value
        
        this.setState(change)
    }

    onClick = (e) => {
        const {key, value} = this.state;
        const credential = {'key': key, 'value': value};
        
        this.props.editCredential(credential);
    }

    render(){
        return (
            <div>
                <h1>Key</h1>
                <input type='text' onChange={this.handleChange}/>
                <h1>Value</h1>
                <input type='text' onChange={this.handleChange}/>
                <input type='submit' value="Edit" onClick={this.onClick}/>
            </div>
        )
    }
}

export const mapStateToProps = (state) => {
    return {
        key: state.currentEdittingKey,
        value: state.currentEdittingValue
    }
}

export const mapDispatchToProps = (dispatch) => {
    return {
        editCredential: (credential) => {
            dispatch(editCredentialAction(credential))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditCredentialView);