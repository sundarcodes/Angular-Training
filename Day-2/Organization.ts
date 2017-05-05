import { Employee } from './Employee';
export class Organization {
    name: string;
    listOfEmployees: Employee[];
    constructor(name: string) {
        this.name = name;
        this.listOfEmployees = [];
    }
    createEmployees() {
        for (let i = 1; i <= 10; i++) {
            let emp: Employee = new Employee(i, 'A' + i, i * 1000, Math.floor(Math.random() * 5) + 1   );    
            this.listOfEmployees.push(emp);       
        }
    }
    printEmployeesInfo() {
      this.listOfEmployees.map(emp => emp.printInfo());
    //   this.listOfEmployees.map(function(emp) {
    //       return emp.printInfo();
    //   })  
    }
    getEmployeeList() {
        return this.listOfEmployees;
    }

}