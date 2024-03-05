let employee = {};

function updateEmployeeWithKeyAndValue(employee, key, value) {
  // Non-destructive update
  return {
    ...employee,
    [key]: value
  };
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  // Destructive update
  employee[key] = value;
  return employee;
}

function deleteFromEmployeeByKey(employee, key) {
  // Non-destructive delete
  let newEmployee = { ...employee };
  delete newEmployee[key];
  return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  // Destructive delete
  delete employee[key];
  return employee;
}
