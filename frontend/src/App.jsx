import React, { Component } from "react";
import NavBar from "./commponents/navBar";
import { Route, Redirect, Switch } from "react-router-dom";
import Home from "./commponents/home";
import Login from "./commponents/login";
import NotFound from "./commponents/NotFound";
import * as userService from "./services/userService";
import { login } from "./services/authService";
import { ToastContainer, toast } from "react-toastify";
import jwtDecode from "jwt-decode";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

class App extends Component {
  state = {
    isModalOpen: false,
    isModalOpen2: false,
  };

  componentDidMount() {
    try {
      const jwt = localStorage.getItem("token");
      const user = jwtDecode(jwt);
      this.setState({ user });
    } catch (ex) {}
  }

  handleLogin = async (data) => {
    //server side part using axios
    if (this.state.isModalOpen) {
      try {
        const { data: jwt } = await login(data);
        localStorage.setItem("token", jwt);
        const user = jwtDecode(jwt);
        this.setState({ isModalOpen: !this.state.isModalOpen, user });
      } catch (ex) {
        toast.error(ex.data);
      }
    } else this.setState({ isModalOpen: !this.state.isModalOpen });
  };

  handleRegister = async (data) => {
    //server side part using axios
    if (this.state.isModalOpen2) {
      try {
        const response = await userService.register(data);
        localStorage.setItem("token", response.headers["x-auth-token"]);
        const user = jwtDecode(response.headers["x-auth-token"]);
        this.setState({ isModalOpen2: !this.state.isModalOpen2, user });
      } catch (ex) {
        toast.error(ex.data);
      }
    } else {
      this.setState({ isModalOpen2: !this.state.isModalOpen2 });
    }
  };

  handleLogOut = () => {
    localStorage.removeItem("token");
    this.setState({ user: null });
  };

  handleClose = () => {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  };

  handleClose2 = () => {
    this.setState({ isModalOpen2: !this.state.isModalOpen2 });
  };

  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <NavBar
          user={this.state.user}
          onLogin={this.handleLogin}
          onRegister={this.handleRegister}
          isModal={this.state.isModalOpen}
          isModal2={this.state.isModalOpen2}
          onClose={this.handleClose}
          onClose2={this.handleClose2}
          onLogOut={this.handleLogOut}
        />
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/not-found" component={NotFound} />
          <Redirect from="/" to="/Home" />
          <Redirect to="/not-found" />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
