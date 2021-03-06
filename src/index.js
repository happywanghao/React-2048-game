import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './assets/styles/normalize.scss';
import './assets/styles/index.scss';
import Layouts from './layouts';
import store from './store';
import registerServiceWorker from './utils/registerServiceWorker';

const basename =
  process.env.NODE_ENV === 'production' ? '/React-2048-game' : '/';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename={basename}>
      <Layouts />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
