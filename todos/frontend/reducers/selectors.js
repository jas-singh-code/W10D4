export const allTodos = (state) => {
    return Object.values(state.todos)
}

export const stepsByTodoId = (state, todoId) => {
    return state.steps.filter((step)=> {
        step.todo_id === todoId
    })
}