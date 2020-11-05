import React from "react";

const EmployeeContext = React.createContext({
  employee: [],
  filteredResults: [],
  searchedEmployee : "",
  onChange: () => undefined,
  search: (searchedEmployee) => {
    console.log(searchedEmployee)
    /*
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
    */
  }
});

export default EmployeeContext;
