import React from "react";
import LOGIN from "./components/LOGIN.js";
import Products from "./components/Products.js";
import SaveList from "./components/SaveList.js";

  function App () {

return (
  <div className="wrapper">
    <div className="list">
      <h1>Product list</h1>
      <Products />
      <SaveList />
    </div>
    <LOGIN/>
  </div> 
  );
}

export default App;