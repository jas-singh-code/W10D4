import { connect } from 'react-redux';
import { removeTodo } from '../../actions/todo_actions';
import { receiveSteps } from '../../actions/step_actions';
import TodoDetailView from "./todo_detail_view"
// import React from "react"
// import { allTodos } from "../../reducers/selectors"

const mapDispatchToProps = dispatch => ({
    removeTodo : todo => dispatch(removeTodo(todo)),
    receiveSteps: step => dispatch(receiveSteps(step))
})


export default connect(null, mapDispatchToProps)(TodoDetailView);