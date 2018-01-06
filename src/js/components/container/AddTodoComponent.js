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
    const value = this.inputName.value

    this.props.dispatch(addTodo(value))
    this.inputName.value = '';
  }

  render() {
    let input;

    return (
      <div>
        <form onSubmit={this.addTodo}>
          <input
            ref={el => this.inputName = el}
            type="text"
            name={'name'}
          />
          <button type={'submit'}>Toevoegen</button>
        </form>
      </div>
    )
  }
}

AddTodoComponent = connect()(AddTodoComponent)

export default AddTodoComponent