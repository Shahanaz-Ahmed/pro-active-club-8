import React, { useEffect, useState } from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;
  console.log(cart);

  let total = 0;
  for (const product of cart) {
    total = total + parseInt(product.Time_required);
  }

  // start
  const [breaktime, setBreaktime] = useState([0]);

  const handlebreakTimeToList = (breaktime) => {
    console.log(breaktime);
    setBreaktime(breaktime);
    localStorage.setItem("breaktime", JSON.stringify(breaktime));
  };

  useEffect(() => {
    const breaktime = localStorage.getItem("breaktime");
    if (breaktime) {
      setBreaktime(JSON.parse(breaktime));
    } else {
      setBreaktime(0);
    }
  }, []);
  //end

  return (
    <div className="cart">
      <h2>Shahanaz Ahmed Nishi</h2>
      <p>Student</p>
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
          <button onClick={() => handlebreakTimeToList(10)}>10s</button>
        </div>
        <div>
          <button onClick={() => handlebreakTimeToList(20)}>20s</button>
        </div>
        <div>
          <button onClick={() => handlebreakTimeToList(10)}>30s</button>
        </div>
        <div>
          <button onClick={() => handlebreakTimeToList(40)}>40s</button>
        </div>
      </div>
      <h2>Exercise Details</h2>
      <div>
        <div>
          <p>Exercise Time: {total}</p>
        </div>
        <div>
          <p>Break Time: {breaktime}</p>
        </div>
      </div>
      <button className="Activity-button">Activity Complete</button>
    </div>
  );
};

export default Cart;
