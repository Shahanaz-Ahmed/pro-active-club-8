import React from "react";
import "./Exercise.css";
const Exercise = (props) => {
  console.log(props.activity);
  const { name, Time_required, img } = props.activity;
  return (
    <div className="exercise">
      <img src={img} alt="" />
      <div className="exercise-info">
        <h3>{name}</h3>
        <p>Time Required: {Time_required}</p>
      </div>
      <button className="btn-card">
        <p>Add to List</p>
      </button>
    </div>
  );
};

export default Exercise;
