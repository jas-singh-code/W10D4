import React from 'react';

class TodoListItem extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render () {
        // debugger;
        return (
            <li>{this.props.todo.title}</li>
        )
    }
}
// {
//     this.props.todos.map((todo) => {
//         return <li key={todo.id}>Title: {todo.title}</li>
//         })
//     }
export default TodoListItem;