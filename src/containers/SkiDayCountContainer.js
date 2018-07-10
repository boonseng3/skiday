import React, { Component } from "react";
import SkiDayCount from './../components/SkiDayCount'

const skiDayCount = {
    "total": 10,
    "powder": 1,
    "backcountry": 2
}


class SkiDayCountContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            total: skiDayCount.total,
            powder: skiDayCount.powder,
            backcountry: skiDayCount.backcountry
        }
    }

    render() {
        return (
            <SkiDayCount total={this.state.total} powder={this.state.powder} backcountry={this.state.backcountry} />

        );
    }
}
export default SkiDayCountContainer;
