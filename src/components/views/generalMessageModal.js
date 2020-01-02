import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateMessage } from '../../store/actions/index';

export class GeneralMessageModal extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
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
        message: state.genericMesssage
    }
}

export const mapDispatchToProps = (dispatch) => {
    return {
        resetMessage: () => {
            dispatch(updateMessage(undefined))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GeneralMessageModal);