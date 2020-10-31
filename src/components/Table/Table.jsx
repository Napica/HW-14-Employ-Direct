import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import NavBar from "../NavBar/NavBar";


const Table = () => {
    // const [employeeState, setEmployeeState] = useState({
    //   employee: [],
    // });

    // useEffect (() => {
    //   API.getEmployee()
    //     .then((res) => {
    //       console.log(res.data.results);
    //       setEmployeeState({
    //           ...employeeState, employee: res.data.results
    //       })
    //       this.setState({employees: res.data.results})
    //     })
    //     .catch((err) => console.log(err));
    // })

  return (
    <div>
      <NavBar />
      <h1>this is table</h1>
    </div>
  );
};

export default Table;
