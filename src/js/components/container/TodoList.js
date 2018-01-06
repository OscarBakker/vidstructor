import React from 'react';
import { connect } from 'react-redux';

const TodoList = ({todos}) => (
  <div>
    {todos.map(todo => (
      <p key={todo.id}>{todo.text}</p>
    ))}
  </div>
)

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

const TodoListWithProps = connect(
  mapStateToProps
)(TodoList)

export default TodoListWithProps;