import React from "react";
import { Switch, Route } from 'react-router-dom';
import NotFound from "./components/NotFound";
import SkiDayListContainer from "./containers/SkiDayListContainer";
import SkiDayCountContainer from "./containers/SkiDayCountContainer";
import GoalProgressContainer from "./containers/GoalProgressContainer";
import ShowErrorsContainer from "./containers/ShowErrorsContainer";
import AddDayFormContainer from "./containers/AddDayFormContainer";

export default () => (

    <Switch>
        <Route exact path="/" component={SkiDayCountContainer} />
        <Route exact path="/progress" component={GoalProgressContainer} />
        <Route exact path="/errors" component={ShowErrorsContainer} />
        <Route exact path="/list-days" component={SkiDayListContainer} />
        <Route exact path="/list-days/:filter" component={SkiDayListContainer} />
        <Route exact path="/add-day" component={AddDayFormContainer} />
        <Route path="*" component={NotFound} />
    </Switch>
)