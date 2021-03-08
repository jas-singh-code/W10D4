import React from 'react';

class TodoListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: "Done",
        }
        this.deleteTodo = this.deleteTodo.bind(this);
        this.toggleDone = this.toggleDone.bind(this);
    }

    deleteTodo(e) {
        e.preventDefault();
        this.props.removeTodo(this.props.todo);
    }

    toggleDone(e) {
        e.preventDefault();
        this.props.receiveTodo(this.props.todo);
        if (this.state.status === "Done") {
            this.setState ({
                status: "Undo"
            });
        } else {
            this.setState({
                status: "Done"
            });
        }
    }
    
    render () {
        // debugger;
        return (
            <ul>
                <li>Title: {this.props.todo.title}</li>
                <p>Body: {this.props.todo.body}</p>
                <input type="button" onClick={this.deleteTodo} value="Delete"/>
                <input type="button" onClick={this.toggleDone} value={this.state.status}/>
                <br />
            </ul>
        )
    }
}
// {
//     this.props.todos.map((todo) => {
//         return <li key={todo.id}>Title: {todo.title}</li>
//         })
//     }
export default TodoListItem;