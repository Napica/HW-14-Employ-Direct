import React from "react";

const EmployeeContext = React.createContext({
  employee: [],
  filteredResults: [],
  onChange: () => undefined,
});

export default EmployeeContext;
