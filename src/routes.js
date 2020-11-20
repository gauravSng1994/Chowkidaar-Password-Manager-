import React from 'react';
import {Switch, Route} from "react-router-dom";
import Home from './containers/Home';
const Routes = () => {
    return(
        <div className="App">
            <Switch>
                <Route path='/' component={Home}/>
            </Switch>
        </div>
    )
}

export default Routes;
