import React from "react";
import Employee from "../src/pages/Employee"
import Header from "./components/Header/Header.jsx";
import Navbar from "./components/NavBar/NavBar.jsx";
import Wrapper from "./components/Wrapper/Wrapper"

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <br/>
      <br/>
      <Wrapper>
        <Employee/>
      </Wrapper>
      
    </div>
  );
}

export default App;
