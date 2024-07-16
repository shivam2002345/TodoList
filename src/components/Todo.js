import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addTodo,
  deleteTodo,
  removeTodo,
  completeTodo,
} from "../actions/index";
import "./todo.css";

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const list = useSelector((state) => state.todoReducers.list);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (inputData.trim() !== "") {
      dispatch(addTodo(inputData));
      setInputData("");
    }
  };

  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <figcaption>Add Your List Here 👇</figcaption>
          </figure>

          <div className="addItems">
            <input
              type="text"
              placeholder="✍️ Add Items..."
              value={inputData}
              onChange={(event) => setInputData(event.target.value)}
            />
            <i
              className="fa-solid fa-plus add-btn"
              title="Add item"
              onClick={handleAddTodo}
            ></i>
          </div>

          <div className="showItems">
            {list.map((elem) => (
              <div
                className={`eachItem ${elem.completed ? "completed" : ""}`}
                key={elem.id}
              >
                <h3>{elem.data}</h3>
                <div className="todo-btn">
                  <i
                    className="far fa-trash-alt add-btn"
                    title="Delete item"
                    onClick={() => dispatch(deleteTodo(elem.id))}
                  ></i>
                  <i
                    className="far fa-check-circle complete-btn"
                    title="Complete item"
                    onClick={() => dispatch(completeTodo(elem.id))}
                  ></i>
                </div>
              </div>
            ))}
          </div>

          <div className="showItems">
            <button
              className="btn effect04"
              data-sm-link-text="remove All"
              onClick={() => dispatch(removeTodo())}
            >
              <span>Check List</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
