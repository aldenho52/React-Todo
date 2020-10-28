import React from 'react';

import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

const todos = []

class App extends React.Component {
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

  componentDidUpdate() {
    window.localStorage.setItem('todos', JSON.stringify(this.state.todos))
  }

  componentDidMount() {
    this.setState({
      todos: JSON.parse(window.localStorage.getItem('todos'))
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
