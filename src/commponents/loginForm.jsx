import React from "react";
import Joi from "joi-browser";
import Form from "../common/form";

class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().email().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = () => {
    this.props.onLogin(this.state.data);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
