import { bindActionCreators } from "redux";
import {RECEIVE_TODOS,
        RECEIVE_TODO,
        REMOVE_TODO} from "../actions/todo_actions"

//[{todo1}, {todo2}, ]
// {1: {todo1}, 2: {todo2}}

const initialState = {
    1: {
      id: 1,
      title: "wash car",
      body: "with soap",
      done: false
    },
    2: {
      id: 2,
      title: "wash dog",
      body: "with shampoo",
      done: true
    }
  };

export const todosReducer =  (state = initialState, action) => {
    Object.freeze(state);
    const nextState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_TODOS:
            let todosObject = {};
            action.todos.forEach((el) => {
                todosObject[el.id] = el;
            });
            return todosObject;         
        case RECEIVE_TODO:
            nextState[action.todo.id] = action.todo;
            return nextState;
        case REMOVE_TODO:
            delete nextState[action.todo.id];
            return nextState;
        default:
            return state; 
            // whatever is returned becomes the new slice of state
    }
}