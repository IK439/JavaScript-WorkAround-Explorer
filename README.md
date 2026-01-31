# JavaScript-WorkAround-Explorer

## Description

A web-based dashboard that allows users to explore and compare salaries across different tech roles and companies.
Users can select a role and a company to see:

* Salary for that role at the selected company
* Average salary for the role across all companies
* Average salary at the selected company
* Industry-wide average salary

The dashboard dynamically generates input options and calculates results using JavaScript.

## Coding Techniques

* **DOM Manipulation:** Dynamically creates radio buttons for companies and roles, and updates results on user interaction.
* **Modules & Imports:** Code is split into reusable modules (`salaryData.js`, `workAroundModule.js`, `utilities.js`).
* **Array Methods:** Uses `.map()`, `.filter()`, and `.find()` to process salary data.
* **Higher-Order Functions:** Calculates averages using helper functions.
* **Number Formatting:** Utility function formats salaries with commas for readability.
* **Responsive Design:** Flexbox layout ensures sections adjust to screen size.
* **Separation of Concerns:** HTML, CSS, and JS are modular and organized for maintainability.

## File Structure

```
index.html          - Main HTML file defining the structure of the dashboard.
index.css           - Stylesheet controlling layout, colors, fonts, and flexbox arrangement.
main.js             - Main JavaScript file that renders inputs and updates salary results dynamically.
salaryData.js       - Contains the salary dataset and helper functions to retrieve roles and company data.
workAroundModule.js - Calculates average salaries, salary by role/company, and industry-wide averages.
utilities.js        - Utility functions (e.g., number formatting) used across modules.
```

## Example Output

### Selecting a Role and Company

After selecting **Software Engineer II** and **Medium Data Inc.**, the dashboard displays:

```
The salary for Software Engineer II at Medium Data Inc. is $140,000
The industry average salary for Software Engineer II positions is $145,000
The average salary at Medium Data Inc. is $158,750
The average salary in the Tech industry is $164,583.33
```

### Layout

* Left section: Role selection
* Center section: Company selection
* Right section: Salary results

The layout and styling are controlled via `index.css` with a dark theme and flexbox.
