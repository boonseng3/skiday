import React, { Component } from "react";
import AddDayForm from './../components/AddDayForm'
import { withRouter } from 'react-router'
import '../styles/css/AddDayForm.css'

class AddDayFormContainer extends Component {
    onNewDay = (value) => {
        console.log("On New Day " + value)
    }
    onChange = (value) => {
        console.log("On change " + value)
    }
    onClear = (value) => {
        console.log("On clear " + value)
    }

    render() {
        return (
            <AddDayForm onNewDay={value => this.onNewDay(value)}
                onChange={value => this.onChange(value)}
                onClear={value => this.onClear(value)}
                {...this.props} />

        );
    }
}
export default withRouter(AddDayFormContainer);
