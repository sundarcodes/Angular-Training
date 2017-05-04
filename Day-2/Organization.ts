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
            let emp: Employee = new Employee(i, 'A' + i, i * 1000,this.generateRating());    
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
    generateRating(){
        return  Math.ceil(Math.random() * 10);
    }

}       