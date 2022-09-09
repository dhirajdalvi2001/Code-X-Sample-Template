import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../actions";
import UseForm from "./UseForm";
import Validate from "./Validate";

function SignUp() {
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
  async function submit() {
    dispatch(login());
  }
  return (
    <div className="login">
      <h1>Sign-Up to continue</h1>
      <form
        className="login_form"
        onKeyPress={handleKeyPress}
        onSubmit={(e) => handleSubmit(e, true)}
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
          type="email"
          placeholder="Email Address"
          name="email"
          value={values.email}
          onChange={handleChange}
          autoComplete="off"
        />
        {errors.email && <h6>{errors.email}</h6>}
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={values.password}
          onChange={handleChange}
          autoComplete="off"
        />
        {errors.password && <h6>{errors.password}</h6>}
        <input
          type="password"
          placeholder="Confirm Password"
          name="cpassword"
          value={values.cpassword}
          onChange={handleChange}
          autoComplete="off"
        />
        {errors.cpassword && <h6>{errors.cpassword}</h6>}
        <button className="login_button">Sign Up</button>
        <h3 className="login_h3">
          Already have an account?{" "}
          <Link to="/login" className="login_link">
            Click Here
          </Link>
        </h3>
      </form>
    </div>
  );
}

export default SignUp;
