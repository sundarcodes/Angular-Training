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
            emp.rating >= 4 ? emp.bonus = 1000 : emp.bonus = 0;
        })
    }
}