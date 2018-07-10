import React, { Component } from "react";
import SkiDayList from './../components/SkiDayList'
import '../styles/css/SkiDayList.css'
const days = [{
    "resort": "Kirkwood",
    "date": "2016-12-7",
    "powder": true,
    "backcountry": false
},
{
    "resort": "Squaw Valley",
    "date": "2016-12-8",
    "powder": false,
    "backcountry": false
},
{
    "resort": "Mt Tallac",
    "date": "2016-12-9",
    "powder": false,
    "backcountry": true
}]


class SkiDayListContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            days: days
        }
    }

    onRemoveDay = (date) => {
        this.setState({
            days: this.state.days.filter(d => d.date !== date)
        })

        console.log("Remove " + date)
        console.log(this.state)
    }
    render() {
        return (
            <SkiDayList days={this.state.days}
                filter={this.props.match.params.filter}
                onRemoveDay={date => this.onRemoveDay(date)} />

        );
    }
}
export default SkiDayListContainer;
