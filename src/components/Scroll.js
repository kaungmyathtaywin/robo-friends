import React from "react";
import "./Scroll.css";

function Scroll(props) {
  return (
    <div className="flex-container">
      <div className="wrapper">{props.children}</div>
    </div>
  );
}

export default Scroll;
