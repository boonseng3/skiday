import React, { Component } from "react";
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import Terrain from 'react-icons/lib/md/terrain'
import SnowFlake from 'react-icons/lib/ti/weather-snow'
import SkiDayRow from './SkiDayRow'


const activeFilterStyle = {
    textDecoration: 'none',
    color: 'black'
}

class SkiDayList extends Component {
    constructor({ props }) {
        super(props)
    }

    onRemoveDay = (date) => {
        this.props.onRemoveDay(date)
    }
    render() {
        const filteredDays = (!this.props.filter || !this.props.filter.match(/powder|backcountry/)) ?
            this.props.days :
            this.props.days.filter(day => day[this.props.filter])

        return (
            <div className="ski-day-list">
                <table>
                    <caption>double click to remove</caption>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Resort</th>
                            <th><SnowFlake /></th>
                            <th><Terrain /></th>
                        </tr>
                        <tr>
                            <td colSpan={4}>
                                <Link to="/list-days" style={(!this.props.filter) ? activeFilterStyle : null}>All Days</Link>
                                <Link to="/list-days/powder" style={(this.props.filter) && this.props.filter === "powder" ? activeFilterStyle : null}>Powder Days</Link>
                                <Link to="/list-days/backcountry" style={(this.props.filter) && this.props.filter === "backcountry" ? activeFilterStyle : null}>Backcountry Days</Link>
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredDays.map((day, i) =>
                            <SkiDayRow key={i} {...day} onRemoveDay={this.onRemoveDay} />
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}

SkiDayList.propTypes = {
    filter: PropTypes.oneOf(['powder', 'backcountry']),
    days: (props) => (!Array.isArray(props.days)) ?
        new Error("SkiDayList days property must be an array") :
        (!props.days.length) ?
            new Error("SkiDayList days array must contain at least one record") :
            null
}
export default SkiDayList;
