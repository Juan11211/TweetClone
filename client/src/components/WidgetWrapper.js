import React from "react";

function WidgetWrapper({ children }) {
  return (
    <div className="p-6 bg-gray-500 rounded-lg">
      {children}
    </div>
  );
}

export default WidgetWrapper;
