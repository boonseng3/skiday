import React, { Component } from "react";
import ShowErrors from './../components/ShowErrors'


let errors = ["Error1", "Error2", "Error3"]

class ShowErrorsContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            errors: errors
        }

    }
    onClearError = () => {
        console.log("Clear error")
        this.setState({ errors: [] })
    }

    render() {
        return (
            <ShowErrors errors={this.state.errors} onClearError={value => this.onClearError(value)} />
        );
    }
}
export default ShowErrorsContainer;
