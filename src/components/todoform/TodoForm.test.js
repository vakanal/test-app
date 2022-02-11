import { shallow } from "enzyme";
import TodoForm from "./TodoForm";

describe("TodoForm Component", () => {
  test("llamar a addTodo cuando el formulario tiene un valor", () => {
    const addTodo = jest.fn();
    const prevent = jest.fn();
    const wrapper = shallow(<TodoForm addTodo={addTodo} />);

    wrapper
      .find("input")
      .simulate("change", { target: { value: "mi nuevo todo" } });

    wrapper.find("form").simulate("submit", { preventDefault: prevent });

    expect(addTodo.mock.calls).toEqual([["mi nuevo todo"]]);
    expect(prevent.mock.calls).toEqual([[]]);
  });
});
