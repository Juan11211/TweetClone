import React from "react";

function WidgetWrapper({ children }) {
  return (
    <div className="np-6 bg-gray-500 rounded-lg sm:w-full  md:m-4 lg:m-8 md:px-4 lg:px-8 md:w-1/2 lg:w-1/3 xl:w-1/4">
      {children}
    </div>
  );
}

export default WidgetWrapper;
