import React, { useContext } from "react";
import TableBody from "../TableBody/TableBody";
import EmployeeContext from "../../utils/EmployeeContext";

const TableHeader = () => {
  const employee = useContext(EmployeeContext);
  // console.log(content);
  return (
    <div>
      <table className="table">
        <td className="text-center">
          <button>Name</button>
        </td>
        <td className="text-center">
          <button>Image</button>
        </td>
        <td className="text-center">
          <button>Location</button>
        </td>
        <td className="text-center">
          <button>Phone Number</button>
        </td>
        <td className="text-center">
          <button>Cell Phone</button>
        </td>
        <td className="text-center">
          <button>Email Account</button>
        </td>
        <TableBody />
      </table>
    </div>
  );
};

export default TableHeader;
