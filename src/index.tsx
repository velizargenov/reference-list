import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './index.css';
import GroupsList from './components/App/GroupsList';
import TopicsList from './components/App/TopicsList';
import TopicDetails from './components/App/TopicDetails';
import NotFound from './components/NotFound/NotFound';

const Root = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={GroupsList} />
        <Route exact path='/groups/:group' render={() => <TopicsList />} />
        <Route exact path='/groups/:group/:topic' render={() => <TopicDetails />} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}

render(<Root />, document.getElementById('main'));
