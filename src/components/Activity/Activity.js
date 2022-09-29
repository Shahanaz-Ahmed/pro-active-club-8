import React from "react";
import "./Activity.css";
import { useEffect, useState } from "react";
import Exercise from "../Exercise/Exercise";
import Cart from "../Cart/Cart";

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
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Activity;
