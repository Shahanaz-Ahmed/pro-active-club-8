import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;
  console.log(cart);

  let total = 0;
  for (const product of cart) {
    total = total + parseInt(product.Time_required);
  }
  return (
    <div className="cart">
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
          <p>Exercise Time: {total}</p>
        </div>
        <div>
          <p>Break Time: {cart.length}</p>
        </div>
      </div>
      <button className="Activity-button">Activity Complete</button>
    </div>
  );
};

export default Cart;
