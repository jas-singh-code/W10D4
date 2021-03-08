import React from 'react';
import TodoListItem from '../todo_list/todo_list_item';
import TodoForm from '../todo_list/todo_form';

class TodoList extends React.Component {
    constructor(props) {
        super(props)
    };

    render() {
        // debugger;
        return (
            <div>
                <div>
                    <TodoForm receiveTodo={this.props.receiveTodo}/>
                </div>
                <div>                
                    <ul>
                        {this.props.todos.map((todo) =>
                            <TodoListItem key={todo.id} todo={todo} removeTodo={this.props.removeTodo} receiveTodo={this.props.receiveTodo}/>
                        )}    
                    </ul>
                </div>
            </div>
        )
    }
}

export default TodoList;