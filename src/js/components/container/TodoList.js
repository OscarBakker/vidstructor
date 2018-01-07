import React from 'react';
import { connect } from 'react-redux';
import { removeTodo } from '../../actions'
import { todosTimesTwo } from '../../selectors';

const TodoList = ({todos, todosTwo, dispatch}) => (
  <div>
    {todosTwo.map(todo => (
      <p onClick={() => { dispatch(removeTodo(todo.id)) }} key={todo.id}>{todo.text}</p>
    ))}
  </div>
)

const mapStateToProps = state => {
  return {
    todosTwo: todosTimesTwo(state),
    todos: state.todos
  }
}

const TodoListWithProps = connect(
  mapStateToProps
)(TodoList)

export default TodoListWithProps;