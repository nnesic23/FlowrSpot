import React from "react";
import Loader from "react-loader-spinner";

const loaderStyle = {
  justifyContent: "center",
  alignItems: "center",
};

const LoaderSpinner = () => {
  return (
    <div style={{ display: "flex" }}>
      <Loader
        style={loaderStyle}
        type="Puff"
        color="#df9186"
        height={100}
        width={100}
        timeout={3000}
      />
    </div>
  );
};

export default LoaderSpinner;
