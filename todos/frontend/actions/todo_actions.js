//need to house action creators and
// action type constants --ACTION_NAME

export const receiveTodos = (todos) => { //will be an array of todo objs ex: id: 1, title: "wash car", body: "with no soap", done: false
    return {
      type: RECEIVE_TODOS,
      todos,
    }; // the action object
  };

export const receiveTodo = (todo) => {//single object
    return {
      type: RECEIVE_TODO,
      todo,
    };
  };

  export const removeTodo = (todo) => {
    return {
      type: REMOVE_TODO,
      todo,
    };
  };

export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";
export const REMOVE_TODO = "REMOVE_TODO"