// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line react/prop-types
function RatingTitle({ children }) {
  return (
    <div className="mt-14">
      <p className="text-blue-900 font-semibold text-xl">{children}</p>
      <div className="w-5/5 border-b-2 border-blue-900 mt-4"></div>
    </div>
  );  
}

export default RatingTitle;