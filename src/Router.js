import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// Import context provider
import { MyProvider } from './Context';
import App from './App';
import NotFound from './NotFound';

function Router() {
  return (
    <MyProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={App} />
          <Route exact path='/home' component={App} />
          <Route path='*' exact={true} component={NotFound} />
        </Switch>
      </BrowserRouter>
    </MyProvider>
  );
}

export default Router;
