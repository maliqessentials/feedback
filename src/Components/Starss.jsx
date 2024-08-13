// eslint-disable-next-line no-unused-vars
import React from "react";
import { useState } from "react";
import { Rating } from "primereact/rating";

function Stars() {
  const [value, setValue] = useState(null);

  return (
    <div className="card flex justify-content-center mt-1 pl-10 ">
      <Rating
        value={value}
        onChange={(e) => setValue(e.value)}
        cancel={false}
      />
    </div>
  );
}

export default Stars;
