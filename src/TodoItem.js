import React, { Component } from "react";

class TodoItem extends Component {
    constructor() {
        super();
    }

    render() {
        return (
                <li>{this.props.todo}<button onClick={this.props.delete}>X</button></li>
        );
    }
}

export default TodoItem;
