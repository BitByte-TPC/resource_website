import React, { Component } from "react";
import Semester from "./semester";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="home">
        <div className="content">
          <div className="details">
            <p className="heading">Semester resources at your finger tips</p>
            <p className="subheading">Select your year.</p>
          </div>

          <div className="year"> 
            <Semester year={1} />
            <Semester year={2} />
            <Semester year={3} />
            <Semester year={4} />
          </div>
        </div>
        <div className="image">
          <img
              className="img"
              src={require("../images/photo_hd.png")}
              alt="study_image"
          />
          <p className="subheading">
            Class Notes, Assignments, Lab Manuals, Syllabus, Course books, Online Resources and much more....!
          </p>
        </div>
      </div> 
    );
  }
}

export default Home;
