"use strict";
exports.__esModule = true;
var Organization_1 = require("./Organization");
var salary_upgrader_1 = require("./salary-upgrader");
var org = new Organization_1.Organization('ABC');
org.createEmployees();
console.log("\n Employee Salary: ");
org.printEmployeesInfo();
var salaryUpgrader = new salary_upgrader_1.SalaryUpgrader();
console.log("\n Salary After Increment : ");
salaryUpgrader.incrementSalary(10, org.getEmployeeList());
org.printEmployeesInfo();
console.log("\n Salary After Bonus : ");
salaryUpgrader.addBonus(2, org.getEmployeeList());
//Check the workflow
org.printEmployeesInfo();
