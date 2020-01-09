import React from 'react';
import { connect } from 'react-redux';
import Credential from './credential';
import { ImageButton } from './imageButton';
import { removeCredentialDB, updateActiveView } from '../../store/actions/index';
import iconPathMap from '../../iconPaths';

export class CredentialListItem extends React.Component {
    constructor(props) {
        super(props);
        this.credential = props.credential;
    }

    removeCurrentCredential = (e) => {
        this.props.removeCredential(this.credential);
    }

    render(){
        const removeCredentialButton = <ImageButton iconPath={iconPathMap.remove} onClick={this.removeCurrentCredential} />;
        return (
            <div>
                <Credential keyTag={this.credential.key} valueTag={this.credential.value} />
                {removeCredentialButton}
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