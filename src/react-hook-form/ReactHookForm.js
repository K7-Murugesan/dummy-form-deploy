import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export const ReactHookForm = () => {
  let [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Rendered Successfully");
  }, [count]);

  return (
    <React.Fragment >
      <div className="card w-50 m-auto p-3" >
        <button onClick={() => setCount(count + 1)}>+</button>
        <h5> Count: {count} </h5>
        <button onClick={() => setCount(count - 1)}>-</button>

        <h1 className="text-center">Login Form</h1>
        <form className="form w-75 m-auto ">
          <div className="mb-3">
            <label htmlFor="exampleInputName" className="form-label">
              Name
            </label>
            <input type="text" className="form-control" id="exampleInputName" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </React.Fragment>
  );
};
