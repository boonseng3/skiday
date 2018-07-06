import React from "react";
import { Switch, Route } from 'react-router-dom';
import NotFound from "./components/NotFound";
import Home from "./components/Home";
import SkiDayCount from "./components/SkiDayCount";
import SkiDayListContainer from "./containers/SkiDayListContainer";

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

export default () => (

    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/list-days" component={SkiDayListContainer} />
        <Route exact path="/list-days/:filter" component={SkiDayListContainer} />
        <Route path="*" component={NotFound} />
    </Switch>
)