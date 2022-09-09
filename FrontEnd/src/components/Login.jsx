import React from "react";
import { Link } from "react-router-dom";
import UseForm from "./UseForm";
import Validate from "./Validate";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../actions";

function Login() {
  const { handleChange, handleSubmit, values, errors } = UseForm(
    submit,
    Validate
  );
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const dispatch = useDispatch();

  function handleKeyPress(e) {
    if (e.keyCode === 13) {
      handleSubmit();
    }
  }
  function submit() {
    dispatch(login());
  }
  return (
    <div className="login">
      <h1>Login to continue</h1>
      <form
        className="login_form"
        onKeyPress={handleKeyPress}
        onSubmit={(e) => handleSubmit(e, false)}
        noValidate
      >
        <input
          type="text"
          placeholder="Username"
          name="username"
          value={values.username}
          onChange={handleChange}
          autoComplete="off"
        />
        {errors.username && <h6>{errors.username}</h6>}
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={values.password}
          onChange={handleChange}
          autoComplete="off"
        />
        {errors.password && <h6>{errors.password}</h6>}
        <button className="login_button">Login</button>
        <h3 className="login_h3">
          New here?{" "}
          <Link to="/sign-up" className="login_link">
            Create a new account
          </Link>
        </h3>
      </form>
    </div>
  );
}

export default Login;
