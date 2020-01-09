import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateMessage } from '../../store/actions/index';

export class GeneralMessageModal extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={"generalMessageModal " + (this.props.message? 'show':'hide')}>
                {
                this.props.message && (
                    <div>
                        <h1>{this.props.message}</h1>
                        <button onClick={this.props.resetMessage}>Ok</button>
                    </div>
                    )
                }
            </div>
        )
    }
}

export const mapStateToProps = (state) => {
    return {
        message: state.genericMessage
    }
}

export const mapDispatchToProps = (dispatch) => {
    return {
        resetMessage: () => {
            dispatch(updateMessage(null))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GeneralMessageModal);