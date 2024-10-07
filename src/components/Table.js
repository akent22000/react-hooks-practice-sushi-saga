import React, { useState } from "react";

function Table({ sushiBudget, sushis, plates = [sushis], }) {

  //empty-plate or stack = css image
  //how to get plate image to display?


  // renders an empty plate for every element in the array
  const emptyPlates = plates.map((_, index) => (
    <div key={index}
      className="empty-plate"
      style={{ top: -7 * index }}
    />
  ));


  return (
    <>
      <h1 className="remaining">
        You have: ${sushiBudget} remaining!
      </h1>
      <div className="table">
        <div className="stack">
          {emptyPlates}
        </div>
      </div>
    </>
  );
}

export default Table;
