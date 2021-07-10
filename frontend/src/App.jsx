import React, {useState, useEffect } from "react";
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

function App(){
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
       try {
         const jwt = localStorage.getItem("token");
         const user = jwtDecode(jwt);
         setUser(user);
       } 
       catch (ex) {}
  }, []);

  const handleLogin = async (data) => {
    //server side part using axios
    if ({isModalOpen}) {
      try {
        const { data: jwt } = await login(data);
        localStorage.setItem("token", jwt);
        const user = jwtDecode(jwt);
        setIsModalOpen(!isModalOpen);
        setUser(user);
      } 
      catch (ex) {
        toast.error(ex.data);
      }
    } 
    else setIsModalOpen(!isModalOpen);
  }

  const handleRegister = async (data) => {
    //server side part using axios
    if ({isModalOpen2}) {
      try {
        const response = await userService.register(data);
        localStorage.setItem("token", response.headers["x-auth-token"]);
        const user = jwtDecode(response.headers["x-auth-token"]);
        setIsModalOpen2(!isModalOpen2);
        setUser(user);
      } 
      catch (ex) {
        toast.error(ex.data);
      }
    } 
    else {
      setIsModalOpen2(!isModalOpen2);
    }
  };

  const handleLogOut = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  const handleClose = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleClose2 = () => {
    setIsModalOpen2(!isModalOpen2);
  };

  return (
      <React.Fragment>
        <ToastContainer />
        <NavBar
          user={user}
          onLogin={handleLogin}
          onRegister={handleRegister}
          isModal={isModalOpen}
          isModal2={isModalOpen2}
          onClose={handleClose}
          onClose2={handleClose2}
          onLogOut={handleLogOut}
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

export default App;
