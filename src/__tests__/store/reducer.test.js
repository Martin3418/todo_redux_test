import {addItem, toggleItemState} from "../../store/actions";
import reducer from "../../store/reducer";

test("add item", () => {
  const initialState = {
    todos: [
      {id: 1, name: "Be where we are needed", done: true},
      {id: 2, name: "Preserve our planet and its people to protect our purpose", done: false}
    ]
  };
  const newItem = {id: 3, name: "Have fun", done: false}
  const action = addItem(newItem);
  const expectedResult = {
    todos: [{id: 1, name: "Be where we are needed", done: true},
    {id: 2, name: "Preserve our planet and its people to protect our purpose", done: false}, newItem]
  };
  expect(reducer(initialState, action))
    .toEqual(expectedResult);
});

test("toggle state", () => {
  const initialState = {
    todos: [
      {id: 1, name: "Be where we are needed", done: true},
      {id: 2, name: "Preserve our planet and its people to protect our purpose", done: false}
    ]
  };
  const action = toggleItemState(initialState.todos[0]);
  const expectedResult = {
    todos: [
      {id: 1, name: "Be where we are needed", done: false},
      {id: 2, name: "Preserve our planet and its people to protect our purpose", done: false}
    ]
  };
  expect(reducer(initialState, action))
    .toEqual(expectedResult);
});
