import React from "react";
import "./Activity.css";
import { useEffect, useState } from "react";
import Exercise from "../Exercise/Exercise";

const Activity = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch("activity.json")
      .then((res) => res.json())
      .then((data) => setActivities(data));
  }, []);
  return (
    <div className="activity">
      <div className="activity-container">
        {activities.map((activity) => (
          <Exercise key={activity.id} activity={activity}></Exercise>
        ))}
      </div>
      <div className="information-container">
        <h2>Shahanaz Ahmed Nishi</h2>
      </div>
    </div>
  );
};

export default Activity;
