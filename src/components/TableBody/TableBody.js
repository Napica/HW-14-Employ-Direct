import React, { useContext } from "react";
import EmployeeContext from "../../utils/EmployeeContext";
import "./TableBody.css"

const TableBody = () => {
  const employee = useContext(EmployeeContext);

  console.log(employee);
  return (
    // <h1> this is in a table</h1>
    // console.log(employee)
    <tbody>
      {employee.employee.map(
        ({ login, name, picture, location, phone, cell, email }) => {
          return (
            <tr key={login.uuid} className = "background text">
              <td data-th="Name" className="align-middle">
                {name.first} {name.last}
              </td>
              <td data-th="Images" className="text-center align-middle">
                <img src={picture.large} />
              </td>
              <td data-th="City" className="text-center align-middle">
                {location.city}, {location.state}
              </td>
              <td data-th="Phone" className="text-center align-middle">
                {phone}
              </td>
              <td data-th="Cell" className="text-center align-middle">
                {cell}
              </td>
              <td data-th="Cell" className="text-center align-middle">
                {email}
              </td>
            </tr>
          );
        }
      )}
    </tbody>
  );
};

export default TableBody;
