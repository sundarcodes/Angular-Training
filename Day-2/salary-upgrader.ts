import { Employee } from './Employee';
export class SalaryUpgrader {
    constructor() {

    }
    incrementSalary(percentRaise: number, empList: Employee[]) {
        empList.map(emp => {
            let oldSalary = emp.getSalary();
            let newSalary = (oldSalary*percentRaise/100) + oldSalary;
            emp.updateSalary(newSalary);
        })        
    }
    addBonus(empList: Employee[]) {
        empList.map(emp => {
            let actualSalary = emp.getSalary();
            let bonusSalary = (actualSalary < 40000 ? actualSalary + 10000 : actualSalary);
            emp.updateSalary(bonusSalary);
        })
    }
}