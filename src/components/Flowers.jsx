import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getFlowers } from "../actions/flowerActions";
import SingleFlower from "./SingleFlower";
import LoaderSpinner from "./Loader";

const Flowers = () => {
  const dispatch = useDispatch();

  const { flowers, loading, error } = useSelector((state) => ({
    flowers: state.flowerReducer.flowers,
    error: state.flowerReducer.error,
    loading: state.flowerReducer.loading,
  }));

  useEffect(() => {
    dispatch(getFlowers());
  }, [dispatch]);

  if (error) {
    return <div>Error! {error.message}</div>;
  }

  if (loading) {
    return (
      <div>
        <LoaderSpinner />
      </div>
    );
  }

  return flowers.map((flower) => <SingleFlower key={flower.id} {...flower} />);
};

export default Flowers;
