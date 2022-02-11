import React, { Component } from "react";

export default class TodoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    if (!this.state.value) return;

    this.props.addTodo(this.state.value);

    this.setState({
      value: "",
    });
  };

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          className="input"
          value={this.state.value}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}
