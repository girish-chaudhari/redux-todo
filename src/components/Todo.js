import React, { useState } from "react";
import { AddTodo, DeleteTodo, RemoveTodo } from "./actions";
import { useDispatch, useSelector } from "react-redux";

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const list = useSelector((state) => state.todoReducer.list);
  let mycount = 1;
  const dispatch = useDispatch();

  return (
    <div className="container">
      <div className="mt-3">
        <div className="row">
          <div className="col-5 col-md-8 col-sm-12 m-auto">
            <div className="card shadow-lg">
              <div className="card-header bg-warning">
                <h2 className="text-center fw-bolder text-primary">
                  Todo List
                </h2>
                <div className="row my-2">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="You can add todo Here...."
                      value={inputData}
                      onChange={(e) => setInputData(e.target.value)}
                    />
                    <button
                      className="btn btn-success"
                      onClick={() =>
                        dispatch(AddTodo(inputData), setInputData(""))
                      }
                    >
                      <i className="fa fa-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <ul className="list-group text-center fw-bolder">
                  {list.map((listItem) => (
                    <li className="list-group-item" key={listItem.id}>
                      <div className="row align-items-center">
                        <div className="col-2">{mycount++}</div>
                        <div className="col-8">{listItem.data}</div>
                        <div className="col-2">
                          <button
                            className="btn btn-danger"
                            onClick={() => dispatch(DeleteTodo(listItem.id))}
                          >
                            <i className="fa fa-trash "></i>
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="card-Footer text-center py-3">
                <button className="btn btn-info text-white fw-bolder" onClick={()=>dispatch(RemoveTodo())}>Clear all</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
