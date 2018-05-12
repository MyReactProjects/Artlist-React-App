
import React from 'react';

import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

import Dashboard from '../components/Dashboard';
import Analysis from '../components/Analysis';
import Monitor from '../components/Monitor';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';

const AppRouter = () => (
    <BrowserRouter>
    <div>
    <Header/>
    <Switch>
        <Route path="/" component={Dashboard} exact={true}/>
        <Route path="/monitor" component={Monitor}/>
        <Route path="/analysis" component={Analysis}/>
        
        <Route component={NotFoundPage}/>
    </Switch>
    </div>
</BrowserRouter>
)

export default AppRouter;
