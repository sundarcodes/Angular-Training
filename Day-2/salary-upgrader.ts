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
    addBonus(bonusPer: number , empList: Employee[]) {
         empList.map(emp => {
            let currSalary = emp.getSalary();
            let newSalary = currSalary > 5000 ? (bonusPer*currSalary)/100 + currSalary: currSalary;
            emp.updateSalary(newSalary);
        }) 
    }
}