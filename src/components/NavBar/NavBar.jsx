import React from "react";
import "./NavBar.css";

function Header() {
  return (
    <div className="">
      <div>
        <nav class="navbar navbar-light bg-light float-right">
          <form class="form-inline">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </nav>
      </div>
    </div>
  );
}

export default Header;
