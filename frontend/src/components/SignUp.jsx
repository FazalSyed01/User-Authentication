import React from "react";
import { useState } from "react";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleOnChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePass = (e) => {
    setPass(e.target.value);
    console.log(pass);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form>
        <div className="mb-3">
          <h3>Please Sign in Here...</h3>
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={handleOnChange}
            value={email}
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
            onChange={handlePass}
            value={pass}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignUp;
