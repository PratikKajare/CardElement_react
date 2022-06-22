import React from "react";
import "./Cardelement.css";
import avtar from "../assets/pngwing.png";
const Cardelement = () => {
  return (
    <div className="card">
      <div className="header">
        <div className="lefts">
          <img src={avtar} alt="" className="avtarimg" />
        </div>
        <div className="rights">
          <p className="avtarn">John Deo</p>
          <span className="sname">Available</span>
        </div>
      </div>
      <div className="container"></div>
    </div>
  );
};

export default Cardelement;
