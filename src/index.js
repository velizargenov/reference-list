import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './index.css';
import App from './components/App/App';
import NotFound from './components/NotFound/NotFound';

const Root = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={App} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}

render(<Root />, document.getElementById('main'));
