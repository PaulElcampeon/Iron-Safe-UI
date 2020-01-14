import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import CredentialListItem from '../viewItems/credentialListItem';
import { updateActiveView, logoutAction } from '../../store/actions/index';
import GeneralLink from '../viewItems/generalLink';

export class Lobby extends React.Component {
    
    changeViewToCreateCredential = (e) => {
        this.props.createCredential();
    }

    logout = (e) => {
        this.props.attemptLogout();
    }

    render() {
        const { credentials, user, loggedIn} = this.props;
        return (
            <div>
                {!loggedIn ? <Redirect push to="/"/> 
                : 
                    <div>
                        <button onClick={this.logout}>LOGOUT</button>
                        <h1>Welcome {user} </h1>
                        {credentials && credentials.map((element, index) => {
                            return <CredentialListItem key={element.key} credential={element} />
                        })}
                        <GeneralLink path='add-credential' text='Add Credential' />
                        {/* <ChangeViewButton onClick={this.changeViewToCreateCredential} dataRole={"create-credential"} value="+" /> */}
                    </div>
                }
            </div>
        )
    }
}

export const mapStateToProps = (state) => {
    return {
        credentials: state.credentials,
        user: state.user,
        activeView: state.activeView,
        loggedIn: state.loggedIn
    }
}

export const mapDispatchToProps = (dispatch) => {
    return {
        createCredential: () => {
            dispatch(updateActiveView("create"));
        },
        attemptLogout: () => {
            dispatch(logoutAction());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Lobby);