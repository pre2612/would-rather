import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from 'reducers'
import middleware from 'middleware'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from 'components/App';

const store = createStore(reducers, middleware);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
