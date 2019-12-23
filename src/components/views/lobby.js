import React from 'react';
import { connect } from 'react-redux';
import { CredentialListItem } from '../viewItems/credentialListItem';
import { activeViewAction, logoutAction } from '../actions/index';
import ChangeViewButton from '../viewItems/changeViewButton';


export class Lobby extends React.Component {

    changeViewToCreateCredential = (e) => {
        this.props.createCredential();
    }

    logout = (e) => {
        this.props.attemptLogout();
    }

    render(){
        const {credentials, user} = this.props;
        return(
            <div>
                <button onClick={this.logout} value="LOGOUT"/>
                <h1>Welcome {user} </h1>
                {credentials.map(element => {
                    return <CredentialListItem credential={element}/>
                })}
                <ChangeViewButton onClick={this.changeViewToCreateCredential} dataRole={"create-credential"} value="+"/>
            </div>

        )
    }
}

export const mapStateToProps = (state) => {
    return {
        credentials: state.credentials,
        user: state.user
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