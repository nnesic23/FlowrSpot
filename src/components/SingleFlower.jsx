import React from "react";

const SingleFlower = ({ profile_picture, name, latin_name, sightings }) => {
  const backupImg =
    "//flowrspot.s3.amazonaws.com/flowers/profile_pictures/000/000/010/medium/L_G_2945.JPG?1527514335";
  return (
    <div className="flower-item">
      <div className="flower-item-info">
        <img
          src={
            `${profile_picture}` === "/images/medium/missing.jpg"
              ? `${backupImg}`
              : `${profile_picture}`
          }
          alt={name}
        />
        <div className="flower-info">
          <h2>{name}</h2>
          <h3>{latin_name}</h3>
          <span>{sightings} sightings</span>
        </div>
      </div>
    </div>
  );
};

export default SingleFlower;
