import PropTypes from 'prop-types';
import React,{ Component } from "react";

class GoalProgress extends Component {
    constructor({props}){
        super(props)
        // store a ref to the component
        this.progressRef = React.createRef();
    }
    componentDidMount(){
        this.focusTextInput()
    }

    focusTextInput() {
        // focus on the input
        this.progressRef.current.focus()
    }
    render() {
    const progress = Math.floor(this.props.current / this.props.goal * 100)
      return (
       <div className="goal-progress">
           <progress value={this.props.current} max={this.props.goal}/>
           <span>{progress}%</span>
           <input type="number"
                    ref ={this.progressRef}
                  defaultValue={this.props.goal}
                  onChange={(event) => this.props.onNewGoal(event.target.value)}/>
           <span>days</span>
       </div>
      );
    }
  }

GoalProgress.propTypes = {
    current: PropTypes.number.isRequired,
    goal: PropTypes.number,
    onNewGoal: PropTypes.func
}
  export default GoalProgress;
