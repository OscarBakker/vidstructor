import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../actions';

class AddTodoComponent extends React.Component {
  constructor(props) {
    super(props);

    this.addTodo = this.addTodo.bind(this);
  }

  addTodo(e) {
    e.preventDefault()
    const value = e.target.querySelector('input[name=age]').value;

    this.props.dispatch(addTodo(value))
  }

  render() {


    let input;

    return (
      <div>
        <form onSubmit={this.addTodo}>
          <input type="text" name={'name'}/>
          <input type="text" name={'age'}/>
          <button type={'submit'}>Toevoegen</button>
        </form>
      </div>
    )
  }
}

AddTodoComponent = connect()(AddTodoComponent)

export default AddTodoComponent