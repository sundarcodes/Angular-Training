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
         let origSalary = emp.getSalary();
         let bonusSalary = (origSalary<5000 ? origSalary+500 : origSalary);
         emp.updateSalary(bonusSalary);

      })
    }
}