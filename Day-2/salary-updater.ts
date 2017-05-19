import { Organization } from './Organization';
import { SalaryUpgrader } from './salary-upgrader';

let org: Organization = new Organization('ABC');
org.createEmployees();
console.log("\n Employee Salary: ");
org.printEmployeesInfo();
let salaryUpgrader: SalaryUpgrader = new SalaryUpgrader();
console.log("\n Salary After Increment : ");
salaryUpgrader.incrementSalary(10, org.getEmployeeList());
org.printEmployeesInfo();
console.log("\n Salary After Bonus : ");
salaryUpgrader.addBonus(2,org.getEmployeeList());
//Check the workflow
org.printEmployeesInfo();
