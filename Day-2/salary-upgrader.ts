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
            let actSalary = emp.getSalary();
            let newSalary = actSalary >5000 ? ((actSalary*bonusPer/100) + actSalary) :actSalary;
            emp.updateSalary(newSalary);
        }) 
    }
}