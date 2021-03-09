import React from 'react';
import TodoDetailView from './todo_detail_view';

class TodoListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: "Done",
            detail: false,
        }
        this.deleteTodo = this.deleteTodo.bind(this);
        this.toggleDone = this.toggleDone.bind(this);
        this.showOrHide = this.showOrHide.bind(this);
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

    showOrHide(e) {
        e.preventDefault();
        if (!this.state.detail) { // if false
            this.setState({
                detail: true,
            })
        } else {
            this.setState({
                detail: false,
            })
        }
    }
    
    render () {
        
        return (
            <ul>
                <li onClick={this.showOrHide}>
                     Title: {this.props.todo.title} 
                </li>
                
                 { this.state.detail ? <TodoDetailView body={this.props.todo.body} /> : null }
                {/* <input type="button" onClick={this.deleteTodo} value="Delete"/> */}
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