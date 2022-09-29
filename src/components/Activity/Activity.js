import React from "react";
import "./Activity.css";
import { useEffect, useState } from "react";
import Exercise from "../Exercise/Exercise";

const Activity = () => {
  const [activities, setActivities] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("activity.json")
      .then((res) => res.json())
      .then((data) => setActivities(data));
  }, []);

  const handleAddtoList = (activity) => {
    console.log(activity.Time_required);
    const newCart = [...cart, activity];
    setCart(newCart);
  };

  return (
    <div className="activity">
      <div className="activity-container">
        {activities.map((activity) => (
          <Exercise
            key={activity.id}
            activity={activity}
            handleAddtoList={handleAddtoList}
          ></Exercise>
        ))}
      </div>
      <div className="information-container">
        <h2>Shahanaz Ahmed Nishi</h2>
        <div className="my-info">
          <div>
            <p>47kg</p>
            <p>weight</p>
          </div>
          <div>
            <p>5ft</p>
            <p>Height</p>
          </div>
          <div>
            <p>24</p>
            <p>Age</p>
          </div>
        </div>
        <h2>Add A Break</h2>
        <div className="break">
          <div>
            <button>10s</button>
          </div>
          <div>
            <button>20s</button>
          </div>
          <div>
            <button>30s</button>
          </div>
          <div>
            <button>40s</button>
          </div>
        </div>
        <h2>Exercise Details</h2>
        <div>
          <div>
            <p>Exercise Time: {cart.length}</p>
          </div>
          <div>
            <p>Break Time: {cart.length}</p>
          </div>
        </div>
        <button className="Activity-button">Activity Complete</button>
      </div>
    </div>
  );
};

export default Activity;
