import { shallow } from "enzyme";
import Todo from "./Todo";

describe("Todo Component", () => {
  test("ejecuta completeTodo cuando cliqueo en Complete", () => {
    const completeTodo = jest.fn();
    const removeTodo = jest.fn();
    const index = 5;
    const todo = { texto: "lala", isCompleted: true };
    const wrapper = shallow(
      <Todo
        index={index}
        todo={todo}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
      />
    );

    wrapper.find("button").at(0).simulate("click");

    expect(completeTodo.mock.calls).toEqual([[5]]);
    expect(removeTodo.mock.calls).toEqual([]);
  });

  test("ejecuta removeTodo cuando cliqueo en X", () => {
    const completeTodo = jest.fn();
    const removeTodo = jest.fn();
    const index = 4;
    const todo = { texto: "lala", isCompleted: true };
    const wrapper = shallow(
      <Todo
        index={index}
        todo={todo}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
      />
    );

    wrapper.find("button").at(1).simulate("click");

    expect(removeTodo.mock.calls).toEqual([[4]]);
    expect(completeTodo.mock.calls).toEqual([]);
  });
});
