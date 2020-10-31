import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import NavBar from "../NavBar/NavBar";
import EmployeeContext from "../../utils/EmployeeContext";
import EmployeeData from "../TableHeader/TableHeader";

const Table = () => {
  const [employeeState, setEmployeeState] = useState({
    employee: [],
    filteredResults: [],
    onChange: () => {},
  });

  useEffect(() => {
    API.employee().then((res) => {
      setEmployeeState({
        employee: res.data.results,
        filteredResults: res.data.results,
      });
    });
  }, []);

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
