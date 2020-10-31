import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import NavBar from "../NavBar/NavBar";
import EmployeeContext from "../../utils/EmployeeContext";
import EmployeeData from "../TableHeader/TableHeader"

const Table = () => {
//   const [employeeState, setEmployeeState] = useState({
//     employee: [],
//   });

//   useEffect(() => {
//     API.getEmployee().then((res) => {
//     //   console.log(res.data.results);
//       setEmployeeState({
//         ...employeeState,
//         // employee: res.data.results,
//       });
//       // this.setState({employees: res.data.results})
//     });
//   });

  return (
    // <EmployeeContext.Provider value={employeeState}>
      <div>
        <NavBar />
        <EmployeeData/>
      </div>
    // </EmployeeContext.Provider>
  );
};

export default Table;
