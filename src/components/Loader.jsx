import React from "react";
import { RevolvingDot } from "react-loader-spinner";


const Loader = () => {
  return (
    <div className=" mx-auto my-auto">
      <RevolvingDot color="#95CD41" height={100} width={100} />
    </div>
  );
};

export default Loader;
