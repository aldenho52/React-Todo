import React from 'react';

import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

import styles from './components/Todo.css'

const todos = [
  {
    task: 'buy groceries',
    id: Date.now(),
    completed: false,
  },
  {
    task: 'feed dog',
    id: 45345435432,
    completed: false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  
  constructor() {
    super()
    this.state = {
      todos: todos
    }
  }

  handleToggleItem = (todoID) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === todoID) {
          return {
            ...todo,
            completed: !todo.completed
          }
        } else {
          return todo;
        }
      })
    })
  }

  clearTodos = () => {
    this.setState({
      todos: this.state.todos.filter(todo => (
        !todo.completed
      ))
    })
  }

  addTodo = (input) => {
    this.setState({
      todos: [...this.state.todos, {
        task: input,
        id: Date.now(),
        completed: false
      }]
    })
  }

  render() {
    return (
      <div className='App'>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todos={this.state.todos} clearTodos={this.clearTodos} handleToggleItem={this.handleToggleItem} />
        <TodoForm addTodo={this.addTodo}/>
      </div>
    );
  }
}

export default App;
