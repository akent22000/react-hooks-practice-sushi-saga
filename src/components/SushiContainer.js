import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ sushis, onSeeMoreSushi, sushiBudget, setSushiBudget }) {

  const displaySushi = sushis.map((sushi) => (
    <Sushi
      key={sushi.id}
      sushi={sushi}
      sushiBudget={sushiBudget}
      setSushiBudget={setSushiBudget}
    />
  ))
  // console.log(sushis)
  // console.log(sushiIndex)


  return (
    <div className="belt">
      {displaySushi}
      <MoreButton
        onSeeMoreSushi={onSeeMoreSushi}
      />
    </div>
  );
}

export default SushiContainer;
