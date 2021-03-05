import React from 'react';

class TodoList extends React.Component {
    constructor(props) {
        super(props)
    };

    render() {
        // debugger

        return (
            <div className="todo-list">
                <ul>{
                    // props.todos.map((todo) => {
                    //     return <li key={todo.id}>Title: {todo.title}</li>
                    //     })
                    }
                </ul>
            </div>
        )
    }
}

export default TodoList;