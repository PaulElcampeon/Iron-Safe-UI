import React, {Component} from 'react';
import { logoutAction } from '../../store/actions/index';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export class CustomNavbar extends Component {
    
    logOut = () => {
        this.props.attemptLogout();
    }

    return
    
    render() {
        const {loggedIn} = this.props;
        return (
            <div className={"navbar"}>
                <Link className={"nav-item"} to="/lobby">Iron-Safe</Link>
                {loggedIn && <p onClick={this.logOut} className={"logout-nav nav-item"}>logout</p>}
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        attemptLogout: () => {
            dispatch(logoutAction());
        }
    }
}

const mapStateToProps = (state) => {
    return {
        loggedIn: state.loggedIn
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CustomNavbar);