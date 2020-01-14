import React, {Component} from 'react';
import { connect } from 'react-redux';
import { updateActiveView } from '../../store/actions/index';

export class NavbarItem extends Component {
    constructor(props) {
        super(props);
        this.itemName = this.props;
    }
    onClick = (e) => {
        console.log("You clicked me")
        this.props.updateView(this.props.itemName);
    }

    render() {
        const {itemName} = this.props;

        return (
            <div onClick={this.onClick} className={"navbarItem " + (this.selectedTitle === itemName? 'highlighted-navbarItem': '')}>
                {itemName}
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
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavbarItem);