import React from "react";
import Header from "./components/Header/Header.js";
import Cards from "./components/Cards/Cards.js";
import SwipeButtons from "./components/SwipeButtons/SwipeButtons.js";
function App() {
  return (
    // we will use BEM class naming convention
    <div className="App">
      <Header/>
        <Cards/>
        <SwipeButtons/>

    </div>
  );
}

export default App;
