import React from "react";
import "../Css-files/howtowork.css";

function HowToWorkList(props) {
  return (
    <div className="Howtoworklist">
      <img src={props.img} alt="" />
      <p className="text-howtoworks">{props.text}</p>
      <p className="id"><h4>{props.id}</h4></p>
    </div>
  );
}
export default HowToWorkList;
