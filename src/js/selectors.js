import { createSelector } from 'reselect';

const getTodosTimesTwo = (state) => state.todos.map(todo => (
  { ...todo, text: todo.text + todo.text}
));

export const todosTimesTwo = createSelector(
  [getTodosTimesTwo],
  (todos) => todos
);