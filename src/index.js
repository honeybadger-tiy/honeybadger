import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import HomePage from './components/HomePage';
import 'semantic-ui-css/semantic.min.css';
import registerServiceWorker from './registerServiceWorker';
import BaseLayout from './components/BaseLayout';
import BadgesPage from './components/BadgesPage';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Cart from './components/Cart';
import Contact from './components/Contact';
import Checkout from './components/Checkout';
import Confirmation from './components/Confirmation';
import {baseName} from './config';

ReactDOM.render(
  <BrowserRouter basename={baseName}>
    <BaseLayout>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/badges' component={BadgesPage} />
        <Route path='/contact' component={Contact} />
        <Route path='/cart' component={Cart} />
        <Route path='/checkout' component={Checkout} />
        <Route path='/confirmation' component={Confirmation} />
      </Switch>
    </BaseLayout>
  </BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();
