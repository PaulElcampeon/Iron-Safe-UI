import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import { CredentialListItem } from '../viewItems/credentialListItem';
import { activeViewAction, logoutAction } from '../actions/index';
import GeneralLink from '../viewItems/generalLink';
import ChangeViewButton from '../viewItems/changeViewButton';

export class Lobby extends React.Component {

    changeViewToCreateCredential = (e) => {
        this.props.createCredential();
    }

    logout = (e) => {
        this.props.attemptLogout();
    }

    render() {
        const { credentials, user } = this.props;
        return (
            <div>
                {this.props.activeView === "edit" ? (<Redirect push to="/edit/credential" />)
                    :
                    (
                        <div>
                            <button onClick={this.logout} value="LOGOUT" />
                            <h1>Welcome {user} </h1>
                            {credentials.map(element => {
                                return <CredentialListItem credential={element} />
                            })}
                            <GeneralLink path="add/credential" />
                            {/* <ChangeViewButton onClick={this.changeViewToCreateCredential} dataRole={"create-credential"} value="+" /> */}
                        </div>
                    )
                }
            </div>

        )
    }
}

export const mapStateToProps = (state) => {
    return {
        credentials: state.credentials,
        user: state.user,
        activeView: state.activeView
    }
}

export const mapDispatchToProps = (dispatch) => {
    return {
        createCredential: () => {
            dispatch(activeViewAction("create"));
        },
        attemptLogout: () => {
            dispatch(logoutAction());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Lobby);