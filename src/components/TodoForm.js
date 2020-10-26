import React from 'react'

class TodoForm extends React.Component {
    constructor() {
        super()
        this.state = {
            input: ''
        }
    }

    handleChanges = e => {
        this.setState({
            input: e.target.value
        })
    }

    addTodo = (e) => {
        e.preventDefault()
        console.log('workin')
        this.props.addTodo(this.state.input)
        this.setState({
            input: ''
        })
    }

    render() {
        return (
            <form onSubmit={this.addTodo}>
                <input 
                    onChange={this.handleChanges}
                    type='text'
                    name='todo'
                    value={this.state.input}
                />
                <br></br>
                <button className='add-btn'>Add Todo</button>
            </form>
        )
    }
}

export default TodoForm