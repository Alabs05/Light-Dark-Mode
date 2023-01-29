import React from "react";
import {imgSrc} from "../static";

function Navbar({ toggle }) {
	
  return (
    <div className="navbar">
   	   <div className="navbar_left">
          <img src={imgSrc.logo} className="navbar_left_img" alt="" />
          <h3>ReactFacts</h3>
        </div>
   	   <div className="navbar_right">
   	   		<button className="btnL">Light</button>
   	   		<button className="btnToggle" onClick={toggle}></button>
   	   		<button className="btnD">Dark</button>
   	   </div>
    </div>
  );
};

export {Navbar};