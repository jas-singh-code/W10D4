import { bindActionCreators } from "redux";
import {RECEIVE_TODOS,
        RECEIVE_TODO,
        REMOVE_TODO} from "../actions/todo_actions"

//[{todo1}, {todo2}, ]
// {1: {todo1}, 2: {todo2}}

export const todosReducer =  (state = {}, action) => {
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