import PropTypes from 'prop-types';
import React, { Component } from "react";
import CloseButton from 'react-icons/lib/fa/close'

class ShowErrors extends Component {
    constructor({ props }) {
        super(props)
    }
    render() {
        return (
            <div className="show-errors">
                {(this.props.errors.length) ?
                    this.props.errors.map((message, i) =>
                        <div key={i} className="error">
                            <p>{message}</p>
                            <CloseButton onClick={() => this.props.onClearError(i)} />
                        </div>
                    ) : null
                }
            </div>
        );
    }
}

ShowErrors.propTypes = {
    errors: PropTypes.array,
    onClearError: PropTypes.func
}
export default ShowErrors;
