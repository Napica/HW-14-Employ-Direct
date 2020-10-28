import React from "react";
import Header from "./components/Header/Header.jsx";
import Navbar from "./components/NavBar/NavBar.jsx";
import Main from "./components/Main/Main.jsx"

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <br/>
      <br/>
      <Main />
    </div>
  );
}

export default App;
