import React from "react";
import "./Exercise.css";
const Exercise = ({ activity, handleAddtoList }) => {
  const { name, Time_required, img } = activity;

  return (
    <div className="exercise">
      <img src={img} alt="" />
      <div className="exercise-info">
        <h3>{name}</h3>
        <p>Time Required: {Time_required} min</p>
      </div>
      <button onClick={() => handleAddtoList(activity)} className="btn-card">
        <p>Add to List</p>
      </button>
    </div>
  );
};

export default Exercise;
