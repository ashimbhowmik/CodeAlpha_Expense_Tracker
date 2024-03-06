import React from "react";
import { BeatLoader, PacmanLoader, PulseLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="flex">
      <BeatLoader
        color="#3B82F6"
        loading="true"
        size="12px"
        data-testid="loader"
      />
    </div>
  );
};

export default Loader;
