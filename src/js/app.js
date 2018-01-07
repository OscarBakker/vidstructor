import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoReducers from './reducers';
import TodoApp from "./TodoApp";
import { composeWithDevTools } from 'redux-devtools-extension';

class App extends Component {
  constructor() {
    super();

  }

  render() {
  let store = createStore(todoReducers, composeWithDevTools());

    return (
      <Provider store={store}>
        <TodoApp/>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));