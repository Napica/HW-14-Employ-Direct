import React from "react";
import Employee from "../src/pages/Employee"
import Header from "./components/Header/Header.jsx";
import Wrapper from "./components/Wrapper/Wrapper"

function App() {
  return (
    <div className="App">
      <Header />
      <Wrapper>
        <Employee/>
      </Wrapper>
      
    </div>
  );
}

export default App;
