import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import CredentialListItem from '../viewItems/credentialListItem';
import { updateActiveView, logoutAction } from '../../store/actions/index';
import CustomNavbar from '../viewItems/customNavbar';

export class Lobby extends React.Component {
    
    logout = (e) => {
        this.props.attemptLogout();
    }

    render() {
        this.props.updateSelectedView()
        const { credentials, user, loggedIn} = this.props;
        return (
            <div>
                <CustomNavbar history={this.props.history} subtitles={['lobby', 'add-credential','logout']}/>
                {!loggedIn ? <Redirect push to="/"/> 
                : 
                    <div>
                        <h1>Welcome {user} </h1>
                        {credentials && credentials.map((element, index) => {
                            return <CredentialListItem key={element.key} credential={element} />
                        })}
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
        updateSelectedView: () => {
            dispatch(updateActiveView("lobby"));
        },
        attemptLogout: () => {
            dispatch(logoutAction());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Lobby);