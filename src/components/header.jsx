import React from "react";

export const Header = (props) => {
  return (
    <header className="masthead" id="masthead">
    <div className="col-lg-10 container">
        <div className="masthead-subheading">
          {props.data ? props.data.heading : "Loading"}
        </div>
        <div className="masthead-heading text-uppercase">
          {props.data ? props.data.subheading : "Loading"}
        </div>
        <a className="button-atas hvr-outline-out" href="https://discord.gg/btQQsH6PTn" target="_blank" rel="noopener noreferrer">JOIN NOW</a>
        <a className="button-atas2 hvr-outline-out ms-lg-4" href="#introduction">LEARN MORE</a>
    </div>
</header>
  );
};
