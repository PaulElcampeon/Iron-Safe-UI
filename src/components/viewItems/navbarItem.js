import React, {Component} from 'react';
import { connect } from 'react-redux';
import { updateActiveView, logoutAction } from '../../store/actions/index';
import { Link } from 'react-router-dom'

export class NavbarItem extends Component {
 
    onClick = (e) => {
        if (this.props.itemName === 'logout') {
            this.props.attemptLogout();
        } 
    }
  
    render() {
        const {itemName} = this.props;
        return (
            <div onClick={this.onClick} className={"navbarItem " + (this.selectedTitle === itemName? 'highlighted-navbarItem': '')}>
                {this.itemName === "logout" ? itemName : <Link className={"links"} to={`/${itemName}`}>{itemName}</Link>}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        selectedTitle: state.activeView
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateView: (view) => {
            dispatch(updateActiveView(view))
        },
        attemptLogout: () => {
            dispatch(logoutAction());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavbarItem);