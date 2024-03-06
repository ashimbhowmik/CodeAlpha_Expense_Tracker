import React from "react";
import { PropagateLoader, PulseLoader, SyncLoader } from "react-spinners";

const PageLoader = () => {
  return (
    <div>
      <span>
        <PulseLoader
          color="#3BA234"
          loading="true"
          size="12px"
          data-testid="loader"
        />
      </span>
    </div>
  );
};

export default PageLoader;
