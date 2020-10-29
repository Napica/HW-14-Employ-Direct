import React from "react";
import "./NavBar.css";

function navbar() {
  return (
    <>
      <div className="col-sm-12 navBar">
        <div className="col-sm-3">
          <nav className="navbar">
            <form className="form-inline">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value=""
                onChange=""
              />
              <button
                className="btn btn-primary my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </nav>
        </div>
      </div>
    </>
  );
}

export default navbar;
