import React, { Component } from "react";
import "./Todo.css";

export default class Todo extends Component {
  render() {
    const { todo, index, completeTodo, removeTodo } = this.props;

    return (
      <div
        className="todo"
        style={{
          textDecoration: todo.isCompleted ? "line-through" : "",
        }}
      >
        {todo.text}
        <div>
          <button onClick={() => completeTodo(index)}>Complete</button>
          <button onClick={() => removeTodo(index)}>X</button>
        </div>
      </div>
    );
  }
}
