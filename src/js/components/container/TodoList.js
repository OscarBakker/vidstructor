import React from 'react';
import { connect } from 'react-redux';
import { removeTodo } from '../../actions'

const TodoList = ({todos, dispatch}) => (
  <div>
    {todos.map(todo => (
      <p onClick={() => { dispatch(removeTodo(todo.id)) }} key={todo.id}>{todo.text}</p>
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