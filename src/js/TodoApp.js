import React from 'react';
import AddTodoComponent from "./components/container/AddTodoComponent";
import TodoListWithProps from './components/container/TodoList';

export default class TodoApp extends React.Component {
  render() {
    return (
      <div>
        Toevoegen todo
        <AddTodoComponent/>
        <TodoListWithProps/>
        <br/>

        Formulier


      </div>
    )
  }
}

