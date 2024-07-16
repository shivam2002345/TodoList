export const addTodo = (data) => {

    // Adding the todoItem
  return {
    type: "ADDTODO",
    payload: {
      id: new Date().getTime().toString(),
      data: data,
    },
  };
};


//  Delete particular todo
export const deleteTodo = (id) => {
  return {
    type: "DELETE_TODO",
    id,
  };
};


// Remove all todos
export const removeTodo = () => {
  return {
    type: "REMOVE_TODO",
  };
};


//  Mark as complete
export const completeTodo = (id) => {
  return {
    type: "COMPLETE_TODO",
    id,
  };
};
