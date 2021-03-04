import {combineReducers} from 'redux'
import {todosReducer} from "./todos_reducer";
import {stepsReducer} from "./steps_reducer";

const rootReducer = combineReducers ({
    todos: todosReducer,
    todoSteps: stepsReducer,
})

export default rootReducer;