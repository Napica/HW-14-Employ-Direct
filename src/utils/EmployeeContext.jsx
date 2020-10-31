import React from 'react';

const EmployeeContext = React.createContext({
    employee: [],
    onChange: () => undefined
})

export default EmployeeContext