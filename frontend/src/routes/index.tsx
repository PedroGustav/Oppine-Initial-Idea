import React from 'react';
import { Switch } from 'react-router-dom';

import { Route } from './route';
import { Dashboard } from '../pages/Dashboard';
import {InitialPage} from '../pages/InitialPage';
import {LoginPage} from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';

export function Routes(){
    return(

        <Switch>
            <Route path='/' exact component={InitialPage}/>
            <Route path='/login' component={LoginPage}/>
            <Route path='/register' component={RegisterPage}/>

            <Route path='/dashboard' component={Dashboard} isPrivate/>
        </Switch>
    );
}