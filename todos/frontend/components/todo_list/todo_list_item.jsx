import React from 'react';
class TodoListItem extends React.Component {
    constructor(props){
        super(props)
    }

    render () {
        debugger

        return(
            <div>
                <ul>{
                    this.props.todos.map((item) => {
                        return <li key={item.id}>{item}</li>
                    })
                }</ul>
            </div>
        )
    }
}
// {
//     this.props.todos.map((todo) => {
//         return <li key={todo.id}>Title: {todo.title}</li>
//         })
//     }
export default TodoListItem;