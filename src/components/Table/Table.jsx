import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import NavBar from "../NavBar/NavBar";
import EmployeeContext from "../../utils/EmployeeContext";
import EmployeeData from "../TableHeader/TableHeader";

const Table = () => {
  const [employeeState, setEmployeeState] = useState({
    employee: [],
    filteredResults: [],
    searchedEmployee : "",
    onChange: () => {},
    search: () => {}
  });

  useEffect(() => {
    API.employee().then((res) => {
      setEmployeeState({
        // ...employeeState,
        employee: res.data.results,
        filteredResults: res.data.results,
      });
    });
  }, []);

/*  const search = function (searchEmployee) {
    console.log(searchEmployee)
    const searchedItem = searchEmployee.target.value;
    const searchList = employeeState.employee.filter(function (
      specificEmployee
    ) {
      let completeSearch = specificEmployee.name.first.toLowerCase();
      return completeSearch.indexOf(searchedItem.toLowercase());
    });
    setEmployeeState({
    //   ...employeeState,
      filteredResults: searchList,
    });
  };
*/

  //   console.log("++++++++++++++++++++++")
  //   console.log(employeeState);
  //   console.log("++++++++++++++++++++++")

  return (
    <EmployeeContext.Provider value={employeeState}>
      <div>
        <NavBar />
        <EmployeeData />
      </div>
    </EmployeeContext.Provider>
  );
};

export default Table;
