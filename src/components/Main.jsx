import React from "react";

const Main = () => {
  return (
    <div className="main">
      <h1>Discover flowers around you</h1>
      <p>Explore between more than 8.427 sightings</p>
      <div className="search">
        {" "}
        <input type="text" placeholder="Looking for something specific?" />
      </div>
    </div>
  );
};

export default Main;
