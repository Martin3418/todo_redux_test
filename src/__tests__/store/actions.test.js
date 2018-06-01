import {addItem} from "../../store/actions";

const initialState = {
  todos: [
    {id: 1, name: "Be where we are needed", done: true},
    {id: 2, name: "Preserve our planet and its people to protect our purpose", done: false}
  ]
};

test("add a todo", () => {
  expect(addItem(initialState.todos[0]))
    .toEqual({type: "ADD", todo: initialState.todos[0]})
})
