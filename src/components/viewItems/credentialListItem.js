import React from 'react';
import { connect } from 'react-redux';
import { removeCredentialDB } from '../../store/actions/index';

export class CredentialListItem extends React.Component {
    constructor(props) {
        super(props);
        this.credential = props.credential;
        this.state = {
            show: false
        }
    }

    removeCurrentCredential = (e) => {
        this.props.removeCredential(this.credential);
    }

    onClick = (e) => {
        this.setState({show: !this.state.show})
    }

    render(){
        const {show} = this.state;
        return (
            <div className={"credentialListItem"}>
                <div onClick={this.onClick} className={"key"}> 
                    {this.credential.key}
                </div>
                <div className={"value " + (show? 'show' : 'hide')}>
                    {this.credential.value}
                </div>
                <div className={"remove " + (show? 'show' : 'hide')}>
                   <button onClick={this.removeCurrentCredential}>REMOVE</button>
                </div>
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
        removeCredential: (credential) => {
            dispatch(removeCredentialDB(credential))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CredentialListItem);