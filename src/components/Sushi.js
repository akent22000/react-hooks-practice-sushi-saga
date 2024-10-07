import React, { useState } from "react";

function Sushi({ sushi, sushiBudget, setSushiBudget }) {
  const [isEaten, setIsEaten] = useState(false);

  function handleDeleteClick() {
    setIsEaten(sushi)
    if (sushiBudget === 0) {
      setSushiBudget(sushiBudget);
    } else {
      setSushiBudget(sushiBudget - sushi.price);
    }
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={handleDeleteClick}
      >
        {isEaten ? null : (
          <img
            src={sushi.img_url}
            alt={sushi.name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  );
}

export default Sushi;
