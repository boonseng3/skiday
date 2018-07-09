import React, { Component } from "react";
import GoalProgress from './../components/GoalProgress'

const progress = {
                      "current": 10,
                      "goal": 100
                  }


class GoalProgressContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            current: progress.current,
            goal: progress.goal
        }
    }
    onNewGoal= (value)=>{

    console.log("New goal is "+value)
    }

    render() {
        return (
            <GoalProgress {...this.state} onNewGoal={value=> this.onNewGoal(value)}/>

        );
    }
}
export default GoalProgressContainer;
