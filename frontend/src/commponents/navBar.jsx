import React from "react";
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

function NavBar(props){

  return (
      <React.Fragment>

        {/*Navbar*/}
        <div className="navbarr">
          <div className="brand">IIITDMJ <nobr className="hide">PORTAL</nobr></div>
          <div className="navButton">
          {props.user ? 
                (
                  <>
                      <div className="secButton" to="/user">
                        <span className="fa fa-user-circle-o"></span>{" "}
                        {props.user.name}
                      </div>

                      <button className="secButton" onClick={props.onLogOut}>
                        <span className="fa fa-sign-out"></span> Sign-out
                      </button>
                  </>
                )
              :(
                <>
                  <button 
                    onClick={props.onClose} 
                    className="secButton"
                  >
                    Log in
                  </button>

                  <button
                    onClick={props.onClose2}
                    className="priButton"
                  >
                    Sign up
                  </button>
                </>
                )
            }
          </div>  
        </div>
      
        {/* login part */}
        <Modal isOpen={props.isModal} toggle={props.toggleModal}>
          <ModalHeader toggle={props.toggleModal}>
            <div>
              Login
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={props.onClose}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          </ModalHeader>
          <ModalBody>
            <LoginForm onLogin={props.onLogin} />
          </ModalBody>
        </Modal>
        
        {/* register part */}
        <Modal isOpen={props.isModal2} toggle={props.toggleModal2}>
          <ModalHeader toggle={props.toggleModal2}>
            <div>
              Register
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={props.onClose2}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          </ModalHeader>
          <ModalBody>
            <RegisterForm onRegister={props.onRegister} />
          </ModalBody>
        </Modal>
      </React.Fragment>
    )
}

export default NavBar;
