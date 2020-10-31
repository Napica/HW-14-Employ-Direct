import React, { useContext } from "react";
import TableBody from "../TableBody/TableBody";
import EmployeeContext from "../../utils/EmployeeContext";

const TableHeader = () => {
  const employee = useContext(EmployeeContext);
  // console.log(content);
  return (
    <div>
      <h1>this is the tableheader</h1>
      <table className="table">
        <TableBody />
      </table>
    </div>
  );
};

export default TableHeader;
