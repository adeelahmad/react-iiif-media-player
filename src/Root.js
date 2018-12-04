import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import App from './App';

const store = createStore(rootReducer, applyMiddleware(thunk));
export { store };

const Root = (props) => (
  <Provider store={store}>
    <App config={props.config} poster={props.poster} />
  </Provider>
);

export default Root;
