import { connect } from 'react-redux';
import TodoList from './todo_list';
import { receiveTodo, removeTodo } from '../../actions/todo_actions'
import { allTodos } from '../../reducers/selectors'

const mapStateToProps = (state) => ({//getting state from react-redux like provider
    todos: allTodos(state) // will exist in todoList props
})

const mapDispatchtoProps = dispatch => ({
    receiveTodo: todo => dispatch(receiveTodo(todo)),
    removeTodo: todo => dispatch(removeTodo(todo)), // will exist in todoList props
});

export default connect(mapStateToProps, mapDispatchtoProps)(TodoList);
// imported from ract-redux lib
// will invoke the first arg with the state given by the store 
// which is given by the provider in our root component file
// provider gives connect the store
// connect returns a func -todolist, with its props