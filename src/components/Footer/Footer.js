import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <h1>Frequently Ask Question</h1>
        <h3>How does react work?</h3>
        <p>
          ReactJS divides the UI into isolated reusable pieces of code known as
          components. React components work similarly to JavaScript functions as
          they accept arbitrary inputs called properties or props.It’s possible
          to have as many components as necessary without cluttering your code.
        </p>
      </div>
      <div>
        <h3>Differnece between props and state?</h3>
        <p>
          Props are read only.Props can not be modified.On the other hand state
          changes can be asynchronous.state can be modified using this.setState
        </p>
      </div>
      <div>
        <h3>What does useEffect do?</h3>
        <p>
          Placing useEffect inside the component lets us access the count state
          variable (or any props) right from the effect.Hooks embrace JavaScript
          closures and avoid introducing React-specific APIs where JavaScript
          already provides a solution.useEffect run after every render by
          default.
        </p>
      </div>
    </div>
  );
};

export default Footer;
