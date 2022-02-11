import React, { Component } from "react";
import Todo from "./components/todo/Todo";
import TodoForm from "./components/todoform/TodoForm";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        {
          text: "Todo 1",
          isCompleted: false,
        },
        {
          text: "Todo 2",
          isCompleted: false,
        },
        {
          text: "Todo 3",
          isCompleted: false,
        },
      ],
    };
  }

  addTodo = (text) => {
    const newTodos = [{ text }, ...this.state.todos];

    this.setState({ todos: newTodos });
  };

  completeTodo = (index) => {
    const newTodos = [...this.state.todos];

    newTodos[index].isCompleted = true;

    this.setState({ todos: newTodos });
  };

  removeTodo = (index) => {
    const newTodos = [...this.state.todos];

    newTodos.splice(index, 1);

    this.setState({ todos: newTodos });
  };

  render() {
    return (
      <div className="app">
        <div className="todo-list">
          <TodoForm addTodo={this.addTodo} />

          {this.state.todos.map((todo, index) => (
            <Todo
              key={index}
              index={index}
              todo={todo}
              completeTodo={this.completeTodo}
              removeTodo={this.removeTodo}
            />
          ))}
        </div>
      </div>
    );
  }
}
