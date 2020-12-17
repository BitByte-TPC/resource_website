import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap";
import LoginForm from "./loginForm";
import RegisterForm from "./registerForm";

class NavBar extends Component {
  state = {
    errors: null,
  };

  render() {
    return (
      <React.Fragment>
        <Navbar className="bg-li" expand>
          <Nav className="ml-0" navbar>
            <NavbarBrand className="brand" href="/home">
              IIITDMJ PORTAL
            </NavbarBrand>
            <NavItem>
              <button className="but">
                <span className="fa fa-search"></span> Search
              </button>
            </NavItem>
            <div className="or">|</div>
            <NavItem>
              <Link className="nav-link br" to="/aboutus">
                <span className="fa fa-info"></span> About
              </Link>
            </NavItem>
          </Nav>
          <Nav className="ml-auto" navbar>
            {!this.props.user && (
              <React.Fragment>
                <NavItem>
                  <button onClick={this.props.onClose} className="but">
                    Log in
                  </button>
                </NavItem>
                <NavItem>
                  <button
                    onClick={this.props.onRegister}
                    className="btn btn-info"
                  >
                    Sign up
                  </button>
                </NavItem>
              </React.Fragment>
            )}
            {this.props.user && (
              <React.Fragment>
                <NavItem>
                  <Link className="nav-link br" to="/user">
                    <span className="fa fa-user-circle-o"></span>{" "}
                    {this.props.user.name}
                  </Link>
                </NavItem>
                <div className="or">|</div>
                <NavItem>
                  <button className="but" onClick={this.props.onLogOut}>
                    <span className="fa fa-sign-out"></span> Sign-out
                  </button>
                </NavItem>
              </React.Fragment>
            )}
          </Nav>
        </Navbar>
        {/* login part */}
        <Modal isOpen={this.props.isModal} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>
            <div>
              Login
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={this.props.onClose}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          </ModalHeader>
          <ModalBody>
            <LoginForm onLogin={this.props.onLogin} />
          </ModalBody>
        </Modal>
        {/* register part */}
        <Modal isOpen={this.props.isModal2} toggle={this.toggleModal2}>
          <ModalHeader toggle={this.toggleModal2}>
            <div>
              Register
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={this.props.onClose2}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          </ModalHeader>
          <ModalBody>
            <RegisterForm onRegister={this.props.onRegister} />
          </ModalBody>
        </Modal>
      </React.Fragment>
    );
  }
}

export default NavBar;
