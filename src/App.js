import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import TodoItem from "./TodoItem";

class App extends Component {
    constructor() {
        super();
        this.state = {
            todos: [],
            currentTodo: ""
        };
    }

    addTodo = task => {
        let todosCopy = this.state.todos.slice();
        todosCopy.push(this.state.currentTodo);
        this.setState({todos: todosCopy,
                       currentTodo: ""});
    }

    deleteTodo = i => {
        let todosCopy = this.state.todos.slice();
        todosCopy.splice(i, 1);
        this.setState({todos:todosCopy});
    }

    onInputChange = e => {
        this.setState({ currentTodo : e.target.value });
    }

    render() {
        let bulletedTodos = this.state.todos.map((e, i) => {
            return (
                    <TodoItem todo={e} delete={() => this.deleteTodo(i)} />
            );
        });
        return (
                <div>
                <input placeholder="Enter todo" value={this.state.currentTodo} onChange={this.onInputChange}/>
                <button onClick={this.addTodo}>Add!</button>
                <br/>
                {this.state.todos.length == 0 ? "No Todos yet" : <ul>{bulletedTodos}</ul>}
                </div>
        );
    }
}

export default App;
