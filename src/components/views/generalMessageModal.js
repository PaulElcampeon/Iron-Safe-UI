import React from 'react';
import { connect } from 'react-redux';
import { resetMessage } from '../actions/index';

const GeneralMessageModal = () => {
    return(
        <div>
            <h1>{this.props.message}</h1>
            <button onClick={this.props.resetMessage}>Ok</button>
        </div>
    )
}

export const mapStateToProps = (state) => {
    return {
        message: state.genericMesssage
    }
}

export const mapDispatchToProps = (dispatch) => {
    return {
        resetMessage: () => {
            dispatch(resetMessage())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GeneralMessageModal);