import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import HomePage from './components/HomePage';
import 'semantic-ui-css/semantic.min.css';
import registerServiceWorker from './registerServiceWorker';
import BaseLayout from './components/BaseLayout';
import BadgesPage from './components/BadgesPage';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/badges' component={BadgesPage} />
      </Switch>
    </BaseLayout>
  </BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();
