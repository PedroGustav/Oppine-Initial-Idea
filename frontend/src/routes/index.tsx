import React from 'react';
import { Switch } from 'react-router-dom';

import { Route } from './route';
import { Dashboard } from '../pages/Dashboard';
import {InitialPage} from '../pages/InitialPage';
import {LoginPage} from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';
import { FinishRegisterPage } from '../pages/FinishRegisterPage';
import { MyProfile } from '../pages/MyProfile';

export function Routes(){
    return(

        <Switch>
            <Route path='/' exact component={InitialPage}/>
            <Route path='/login' component={LoginPage} />
            <Route path='/register' component={RegisterPage}/>
            <Route path='/register-' component={FinishRegisterPage} isPrivate/>
            <Route path='/dashboard' component={Dashboard} isPrivate />
            <Route path='/profile' component={MyProfile} isPrivate />
        </Switch>
    );
}