import React, { useContext } from "react";
import TableBody from "../TableBody/TableBody";
import EmployeeContext from "../../utils/EmployeeContext";

const TableHeader = () => {
  // const employee = useContext(EmployeeContext);
  // console.log(content);
  
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th className="text-center">
              <button>Name</button>
            </th>
            <th className="text-center">
              <button>Image</button>
            </th>
            <th className="text-center">
              <button>Location</button>
            </th>
            <th className="text-center">
              <button>Phone Number</button>
            </th>
            <th className="text-center">
              <button>Cell Phone</button>
            </th>
            <th className="text-center">
              <button>Email Account</button>
            </th>
          </tr>
        </thead>
        <TableBody />
      </table>
    </div>
  );
};

export default TableHeader;
