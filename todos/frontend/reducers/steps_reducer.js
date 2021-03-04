import { bindActionCreators } from "redux";
import {RECEIVE_STEPS,
        RECEIVE_STEP,
        REMOVE_STEP} from "../actions/step_actions";

export const stepsReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_STEPS:
            let stepObject = {};
            action.steps.forEach((el) => {
                stepObject[el.id] = el;
            })
            return stepObject;
        case RECEIVE_STEP:
            nextState[action.step.id] = action.step;
            return nextState;
        case REMOVE_STEP:
            delete nextState[action.step.id];
            return newState;
        default:
            return state;
    }
}