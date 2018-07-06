import React, { Component } from "react";
import PropTypes from 'prop-types';
import Terrain from 'react-icons/lib/md/terrain'
import SnowFlake from 'react-icons/lib/ti/weather-snow'

class SkiDayRow extends Component {
    constructor({ props }) {
        super(props)
    }
    render() {
        return (
            <tr onDoubleClick={() => this.props.onRemoveDay(this.props.date)}>
            <td>
                {this.props.date}
            </td>
            <td>
                {this.props.resort}
            </td>
            <td>
                {(this.props.powder) ? <SnowFlake /> : null }
            </td>
            <td>
                {(this.props.backcountry) ? <Terrain /> : null }
            </td>
        </tr>
        );
    }
}

SkiDayRow.propTypes = {
    resort: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    powder: PropTypes.bool,
    backcountry: PropTypes.bool,
    onRemoveDay: PropTypes.func
}
export default SkiDayRow;
