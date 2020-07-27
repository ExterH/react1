import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Pg_00 from '../page/pg_00';
import Error from '../page/error';
import Detail from '../page/comp/detail';
import Delete from '../page/comp/delete';
import Register from '../page/comp/register';

export default function Router(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Pg_00} />
                <Route exact path='/detail' component={Detail} />
                <Route exact path='/delete' component={Delete} />
                <Route exact path='/register' component={Register} />
                <Route component={Error} />
            </Switch>
        </BrowserRouter>
    )
}