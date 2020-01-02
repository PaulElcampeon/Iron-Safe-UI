import React from 'react';
import { connect } from 'react-redux';
import Credential from './credential';
import { ImageButton } from './imageButton';
import { removeCredentialAction, editCredentialKeyAndValue, updateActiveView } from '../../store/actions/index';
import iconPathMap from '../../iconPaths';

export const CredentialListItem = (props) => {
    const { credential } = props;

    const removeCurrentCredential = () => {
        this.props.removeCredential(credential);
    }

    const goToEditPage = () => {
        this.props.goToEditPage(credential)
    }

    const removeCredentialButton = <ImageButton iconPath={iconPathMap.remove} onClick={removeCurrentCredential} />;
    const editCredentialButton = <ImageButton iconPath={iconPathMap.edit} onClick={goToEditPage} />;

    return (
        <div>
            <Credential keyTag={credential.key} valueTag={credential.value} />
            {removeCredentialButton}
            {editCredentialButton}
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
            dispatch(updateActiveView("edit"))
        }
    }
}

export default connect(mapDispatchToProps)(CredentialListItem);