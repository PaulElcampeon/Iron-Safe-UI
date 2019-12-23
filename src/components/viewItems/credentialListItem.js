import React from 'react';
import { connect } from 'react-redux';
import Credential from './credential';
import { ImageButton } from './imageButton';
import { removeCredentialAction, editCredentialKeyAndValue, activeViewAction } from '../actions/index';
import iconPathMap from '../../iconPaths';

export const CredentialListItem = (props) => {
    const { credential } = props;

    const removeCurrentCredential = () => {
        this.props.removeCredential(credential);
    }

    const goToEditPage = () => {
        this.props.goToEditPage(credential)
    }

    const RemoveCredentialButton = <ImageButton iconPath={iconPathMap.remove} onClick={removeCurrentCredential} />;
    const EditCredentialButton = <ImageButton iconPath={iconPathMap.edit} onClick={goToEditPage} />;

    return (
        <div>
            <Credential key={credential.key} password={credential.password} />
            <RemoveCredentialButton />
            <EditCredentialButton />
        </div>
    )
}

export const mapDispatchToProps = (dispatch) => {
    return {
        removeCredential: (credential) => {
            dispatch(removeCredentialAction(credential))
        },
        goToEditPage: (credential) => {
            dispatch(editCredentialKeyAndValue(credential))
            dispatch(activeViewAction("edit"))
        }
    }
}

export default connect(mapDispatchToProps)(CredentialListItem);