import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushis, setSushis] = useState([]);
  const [sushiIndex, setSushiIndex] = useState(0);
  //set index to 0
  const [sushiBudget, setSushiBudget] = useState(100);


  useEffect(() => {
    fetch(`${API}`)
      .then((r) => r.json())
      .then((sushis) => setSushis(sushis))
  }, [])


  //if sushiBudget hits 0, stop click ability
  function handleSeeMoreSushi() {
    setSushiIndex(sushiIndex + 5);
    //set index to add 4 on each click
    // 
  }

  return (
    <div className="app">
      <SushiContainer
        sushis={sushis.slice(sushiIndex, sushiIndex + 5)}
        onSeeMoreSushi={handleSeeMoreSushi}
        setSushiIndex={sushiIndex}
        sushiBudget={sushiBudget}
        setSushiBudget={setSushiBudget}
      />
      <Table sushis={sushis}
        sushiBudget={sushiBudget}

      />
    </div>
  );
}

export default App;
