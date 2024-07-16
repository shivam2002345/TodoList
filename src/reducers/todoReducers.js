const initialData = {
  // All todos will add into a list
  list: [],
};

const todoReducers = (state = initialData, action) => {
  switch (action.type) {
    case "ADDTODO":
      const { id, data } = action.payload;

      return {
        ...state,
        list: [
          ...state.list,
          {
            id: id,
            data: data,
          },
        ],
      };

    case "DELETE_TODO":
      const newList = state.list.filter((elem) => elem.id !== action.id);
      return {
        ...state,
        list: newList,
      };

    case "REMOVE_TODO":
      return {
        ...state,
        list: [],
      };

    case "COMPLETE_TODO":
      const updatedList = state.list.map((elem) => {
        if (elem.id === action.id) {
          return { ...elem, completed: true };
        }
        return elem;
      });
      return {
        ...state,
        list: updatedList,
      };

    default:
      return state;
  }
};

export default todoReducers;
