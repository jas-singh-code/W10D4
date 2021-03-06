import React from 'react';
import { uniqueId } from './todo_util';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: uniqueId(),
            title: "",
            // body: "",
            // tags: "",
        }
        this.updateTitle = this.updateTitle.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    updateTitle(e) {
        this.setState({
            title: e.target.value,
        });
    }

    // updateBody(e) {
    //     this.setState({
    //         body: e.target.value,
    //     })
    // }
    
    handleSubmit(e) {
        e.preventDefault();
        this.props.receiveTodo(this.state);
        // debugger;
        this.setState({
            id: uniqueId(),
            title: "",
            // body: "",
            // tags: "",
        })
        // debugger;
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>All Tea</h1>
                <label>Title:
                    <input type="text" value={this.state.title} onChange={this.updateTitle}/>
                </label>
                <br/>
                {/* <label>Body:
                    <input type="text" value={this.state.body} onChange={this.updateBody}/>
                </label> */}
                <br/>
                <input type="submit" value="Create Todo!"/>
            </form>
        )
    }
}

export default TodoForm;