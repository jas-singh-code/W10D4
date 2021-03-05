import React from 'react';
import TodoListItem from '../todo_list/todo_list_item'

class TodoList extends React.Component {
    constructor(props) {
        super(props)
    };

    render() {

        return (
            <div className="todo-list">
                <TodoListItem />
            </div>
        )
    }
}

export default TodoList;