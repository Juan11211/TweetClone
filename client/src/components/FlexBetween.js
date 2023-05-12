import React from "react";

function FlexBetween({ children }) {
  return (
    <div className="flex items-center sm:justify-between flex-col md:flex-row">
      {children}
    </div>
  );
}

export default FlexBetween;
