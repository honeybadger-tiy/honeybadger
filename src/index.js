import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import HomePage from './components/HomePage';
import 'semantic-ui-css/semantic.min.css';
import registerServiceWorker from './registerServiceWorker';
import BaseLayout from './components/BaseLayout';

ReactDOM.render(
  <BaseLayout>
    <HomePage />
  </BaseLayout>

  , document.getElementById('root'));
registerServiceWorker();
