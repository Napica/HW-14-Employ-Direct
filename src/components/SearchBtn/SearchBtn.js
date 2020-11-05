import React, { useContext } from "react";
import EmployeeSearch from "../../utils/EmployeeContext";

const SearchBtn = () => {
  const search = useContext(EmployeeSearch);

  return (
    <div>
      <nav className="navbar navbar-light">
        <form
          className="form-inline"
           onSubmit={ (event) => {
            event.preventDefault();
            console.log(search.EmployeeSearch)
            console.log("Submitting Form")}}
        >
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            name="searchedEmployee"
            value={search.searchedEmployee}
            onChange={(event) =>
              console.log(event.target.value)
              //search.setEmployeeState({searchedEmployee: event.target.value})
              // search.search(event)
            }
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
