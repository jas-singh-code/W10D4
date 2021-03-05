import { connect } from 'react-redux';
import TodoList from './todo_list';
import { receiveTodo } from '../actions/todo_actions'

const mapStateToProps = (state) => {
    debugger
    return {
        todos: Object.values(state.todos),
    }
}
const mapDispatchtoProps = (dispatch) => {
    return {
        receiveTodo: (todo) => {
            return dispatch(receiveTodo(todo))
        }
    }
}

export default connect(mapStateToProps, mapDispatchtoProps)(TodoList);