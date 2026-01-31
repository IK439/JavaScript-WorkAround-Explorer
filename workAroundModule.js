import { getDataByRole, getDataByCompany } from './salaryData.js';

import salaryData from './salaryData.js';

// Get average salary for a specific role
const getAverageSalaryByRole = role => {
  const roleData = getDataByRole(role);
  const salariesOfRole = roleData.map(obj => obj.salary);
  return calculateAverage(salariesOfRole);
}

// Get average salary for a specific company
const getAverageSalaryByCompany = company => {
  const companyData = getDataByCompany(company);
  const salariesAtCompany = companyData.map(obj => obj.salary);
  return calculateAverage(salariesAtCompany);
}

// Get salary for a specific role at a specific company
const getSalaryAtCompany = (role, company) => {
  const companyData = getDataByCompany(company);
  const roleAtCompany = companyData.find(obj => obj.role === role);
  return roleAtCompany.salary;
}

// Get average salary across all companies and roles
const getIndustryAverageSalary = () => {
  const allSalaries = salaryData.map(obj => obj.salary);
  return calculateAverage(allSalaries);
}

// Helper function to calculate average
function calculateAverage(arrayOfNumbers) {
  let total = 0;
  arrayOfNumbers.forEach(number => total += number);
  return (total / arrayOfNumbers.length).toFixed(2);
}

export { getAverageSalaryByRole, getAverageSalaryByCompany, getSalaryAtCompany, getIndustryAverageSalary };