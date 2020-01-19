import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import CredentialListItem from '../viewItems/credentialListItem';
import { logoutAction } from '../../store/actions/index';
import { Link } from 'react-router-dom'

export class Lobby extends React.Component {
    
    logout = (e) => {
        this.props.attemptLogout();
    }

    render() {
        const { credentials, user, loggedIn} = this.props;
        return (
            <div>
                {!loggedIn ? <Redirect push to="/"/> 
                : 
                    <div className={"lobbyPanel"}>
                        <h1 className={"welcome-message"}>Welcome {user} </h1>
                        <h1 className={"panel-title"}>Credentials</h1>
                        <ul className={"credential-list"}>
                            {credentials && credentials.map((element, index) => {
                                return <CredentialListItem key={element.key} credential={element} />
                            })}
                        </ul>
                        <Link className={"linkButton"} to={'/add-credential'}>Add Credential</Link>
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
        attemptLogout: () => {
            dispatch(logoutAction());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Lobby);