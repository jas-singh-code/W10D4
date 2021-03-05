import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
// import {receiveTodos, receiveTodo, removeTodo} from './actions/todo_actions';
// import {receiveSteps, receiveStep, removeStep} from './actions/step_actions';
// import { allTodos } from './reducers/selectors';

document.addEventListener('DOMContentLoaded', () => {
    const rootElement = document.getElementById('root');

    // ReactDOM.render(<h1>Todos App</h1>, rootElement);
    const store = configureStore();
    ReactDOM.render(<Root store={store}/>, rootElement);

    // window.store = store;
    // console.log(allTodos(store.getState()));
    // window.selector = allTodos;
    // window.receiveTodos = receiveTodos;
    // window.receiveTodo = receiveTodo;
    // window.removeTodo = removeTodo;
    // window.receiveSteps = receiveSteps;
    // window.receiveStep = receiveStep;
    // window.removeStep = removeStep;
});