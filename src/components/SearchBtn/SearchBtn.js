import React, { useContext } from "react";
import EmployeeSearch from "../../utils/EmployeeContext";

const SearchBtn = () => {
  const search = useContext(EmployeeSearch);

  return (
    <div>
      <nav className="navbar navbar-light">
        <form className="form-inline" onSubmit={ (event) => {
          event.preventDefault();
          console.log("Submitting Form")
        } }>
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            //name="search"
            value=""
            onChange={ (event) => console.log(event.target.value)}
          />
          <button className="btn btn-primary my-2 my-sm-0" type="submit">
            Search Employee
          </button>
        </form>
      </nav>
    </div>
  );
};

export default SearchBtn;
