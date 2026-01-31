// Import data and utility functions
import { getRoles, getCompanies } from "./modules/salaryData.js";

import {
  getAverageSalaryByRole,
  getAverageSalaryByCompany,
  getSalaryAtCompany,
  getIndustryAverageSalary,
} from "./modules/workAroundModule.js";

import { formatNumber } from "./modules/utilities.js";

const companies = getCompanies();
const roles = getRoles();

// Create radio buttons for companies and roles
renderInputButtons(companies, "company");
renderInputButtons(roles, "role");

function renderInputButtons(labels, groupName) {
  const container = document.createElement("section");
  container.setAttribute("id", `${groupName}Inputs`);

  let header = document.createElement("h3");
  header.innerText = `Select a ${groupName}`;
  container.appendChild(header);

  labels.forEach((label) => {
    let divElement = document.createElement("div");
    divElement.setAttribute("class", "option");

    // Create radio input
    let inputElement = document.createElement("input");
    inputElement.setAttribute("type", "radio");
    inputElement.setAttribute("name", groupName);
    inputElement.setAttribute("value", label);
    divElement.appendChild(inputElement);

    // Create label for radio input
    let labelElement = document.createElement("label");
    labelElement.setAttribute("for", label);
    labelElement.innerText = label;
    divElement.appendChild(labelElement);

    // Update results when clicked
    inputElement.addEventListener("click", updateResults);

    container.appendChild(divElement);
  });

  document.querySelector("main").prepend(container); // Add section to main
}

function updateResults() {
  const company = document.querySelector("input[name='company']:checked").value;
  const role = document.querySelector("input[name='role']:checked").value;

  if (!company || !role) {
    return;
  }

  // Calculate salaries
  const averageSalaryByRole = getAverageSalaryByRole(role);
  const averageSalaryByCompany = getAverageSalaryByCompany(company);
  const salary = getSalaryAtCompany(role, company);
  const industryAverageSalary = getIndustryAverageSalary();

  // Render salaries with formatting
  document.getElementById(
    "salarySelected"
  ).innerText = `The salary for ${role}s at ${company} is \$${formatNumber(
    salary
  )}`;
  document.getElementById(
    "salaryAverageByRole"
  ).innerText = `The industry average salary for ${role} positions is \$${formatNumber(
    averageSalaryByRole
  )}`;
  document.getElementById(
    "salaryAverageByCompany"
  ).innerText = `The average salary at ${company} is \$${formatNumber(
    averageSalaryByCompany
  )}`;
  document.getElementById(
    "salaryAverageIndustry"
  ).innerText = `The average salary in the Tech industry is \$${formatNumber(
    industryAverageSalary
  )}`;
}