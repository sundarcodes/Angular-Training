import { Organization } from './Organization';
import { SalaryUpgrader } from './salary-upgrader';

let org: Organization = new Organization('ABC');
org.createEmployees();
org.printEmployeesInfo();
let salaryUpgrader: SalaryUpgrader = new SalaryUpgrader();
salaryUpgrader.incrementSalary(10, org.getEmployeeList());
org.printEmployeesInfo();
salaryUpgrader.addBonus(20, org.getEmployeeList());
org.printEmployeesInfo();

