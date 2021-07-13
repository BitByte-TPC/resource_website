import React from "react";

function Semester(props){

  const renderSuffix = () => {
    if (props.year === 1) {
      return "st";
    } else if (props.year === 2) {
      return "nd";
    } else if (props.year === 3) {
      return "rd";
    } else {
      return "th";
    }
  };

  return (
    <button className="btn btn-info cust-btn">
      {props.year}
      {renderSuffix()} year
    </button>
  )
}

export default Semester;
