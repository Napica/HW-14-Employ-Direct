import React, { useContext } from "react";
import EmployeeContext from "../../utils/EmployeeContext";

const TableBody = () => {
  const employee = useContext(EmployeeContext);

  console.log(employee);
  return (
    // <h1> this is in a table</h1>
    // console.log(employee)
    <tbody>
      {employee.employee.map(({ login, name }) => {
        return (
          <tr key={login.uuid}>
            <td data-th="Name" className="">
              {name.first} {name.last}
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default TableBody;
