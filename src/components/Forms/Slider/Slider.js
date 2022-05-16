import React, { useState } from "react";

import "./Estilos.css";

const Slider = ({ label, name }) => {
  const [rangeValue, setRangeValue] = useState(0);

  const ChangeRange = (e) => {
    setRangeValue(e.target.value);
  };

  return (
    <>
      <div className="container  mg-y-5">
        <div className="row columns-3">
          <div>
            <label className="label--inline"> {label}</label> 0
          </div>
          <div className="range">
            <input
              name={name}
              onChange={ChangeRange}
              value={rangeValue}
              type="range"
              min="10"
              max="100"
              steps="1"
            />
          </div>
          <div>{rangeValue}</div>
        </div>
      </div>
    </>
  );
};

export default Slider;
