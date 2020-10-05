import React, { Component } from "react";

class Semester extends Component {
  renderSuffix() {
    if (this.props.year === 1) {
      return "st";
    } else if (this.props.year === 2) {
      return "nd";
    } else if (this.props.year === 3) {
      return "rd";
    } else {
      return "th";
    }
  }
  render() {
    return (
      <button className="btn btn-info cust-btn">
        {this.props.year}
        {this.renderSuffix()} year
      </button>
    );
  }
}

export default Semester;
