import React,{ Component } from "react";
import PropTypes from 'prop-types';
import Terrain from 'react-icons/lib/md/terrain'
import SnowFlake from 'react-icons/lib/ti/weather-snow'
import Calendar from 'react-icons/lib/fa/calendar'

class SkiDayCount extends Component {
    constructor({props}){
        super(props)
    }
    render() {
      return (
        <div className="ski-day-count">
        <div className="total-days">
            <span>{this.props.total}</span>
            <Calendar />
            <span>days</span>
        </div>
        <div className="powder-days">
            <span>{this.props.powder}</span>
            <SnowFlake />
            <span>powder</span>
        </div>
        <div className="backcountry-days">
            <span>{this.props.backcountry}</span>
            <Terrain />
            <span>hiking</span>
        </div>
    </div>
      );
    }
  }
 
  SkiDayCount.propTypes = {
    total: PropTypes.number,
    powder: PropTypes.number,
    backcountry: PropTypes.number
}
  export default SkiDayCount;
