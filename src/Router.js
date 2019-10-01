import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import NotFound from './NotFound';

function Router() {
  return (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={App} />
            <Route exact path='/home' component={App} />
            <Route path='*' exact={true} component={NotFound} />
        </Switch>
    </BrowserRouter>
  );
}

export default Router;
