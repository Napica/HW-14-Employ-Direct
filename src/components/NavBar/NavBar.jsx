import React from "react";
import "./NavBar.css";
import SearchBtn from "../SearchBtn/SearchBtn"

function Navbar() {
  return (
    <>
      <div className="col-sm-12 navBar">
        <div className="col-sm-6">
          <SearchBtn/>
        </div>
      </div>
    </>
  );
}

export default Navbar;
