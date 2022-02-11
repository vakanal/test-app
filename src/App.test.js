import { shallow, mount } from "enzyme";
import App from "./App";

describe("App Component", () => {
  test("se debe mostrar el componente correctamente", () => {
    const wrapper = shallow(<App />);

    expect(wrapper).toMatchSnapshot();
  });

  test("tiene el componente TodoForm", () => {
    const wrapper = shallow(<App />);
    const form = wrapper.find("TodoForm");
    const addTodo = wrapper.instance().addTodo;

    expect(form.exists()).toBe(true);
    expect(form.props().addTodo).toBe(addTodo);
  });

  test("tiene el componente Todo", () => {
    const wrapper = shallow(<App />);
    const todo = wrapper.find("Todo").at(0);
    const completeTodo = wrapper.instance().completeTodo;
    const removeTodo = wrapper.instance().removeTodo;

    expect(todo.exists()).toBe(true);
    expect(todo.props().completeTodo).toBe(completeTodo);
    expect(todo.props().removeTodo).toBe(removeTodo);
  });

  test("App Integration Test", () => {
    const wrapper = mount(<App />);
    const prevent = jest.fn();

    wrapper.find("input").simulate("change", { target: { value: "mi todo" } });
    wrapper.find("form").simulate("submit", { preventDefault: prevent });

    const respuesta = wrapper.find(".todo").at(0).text().includes("mi todo");

    expect(respuesta).toEqual(true);
    expect(prevent).toHaveBeenCalledTimes(1);
  });
});
