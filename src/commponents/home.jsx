import React, { Component } from "react";
import Semester from "./semester";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 col-12">
            <div className="row">
              <div className="col-12">
                <h1>Semester resources at your finger tips</h1>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <h4>Select your ear.</h4>
              </div>
            </div>
            <div className="row row-content">
              <div className="col-lg-6 col-12">
                <Semester year={1} />
              </div>
              <div className="col-lg-6 col-12">
                <Semester year={2} />
              </div>
            </div>
            <div className="row row-content">
              <div className="col-lg-6 col-12">
                <Semester year={3} />
              </div>
              <div className="col-lg-6 col-12">
                <Semester year={4} />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="row row-image">
              <div className="col no-gutters image-col d-none d-lg-block">
                <img
                  className="img-fluid"
                  src={require("../images/photo_hd.png")}
                  alt="study_image"
                />
              </div>
            </div>
            <div className="row row-text">
              <div className="col">
                <h4 className="">
                  Class notes,PYQ,Assignments,Practical Lab
                  Manuals,Syllabus,Course book pdf and much more....
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
