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
    addBonus(percentRaise: number, empList: Employee[]) {
    empList.map(emp => {
    let orginalSalary = emp.getSalary();
    let hikeSalary = (orginalSalary*percentRaise/100) + orginalSalary;
    let newBonusSal = hikeSalary>10000 ? hikeSalary+1000 : hikeSalary+500;
    emp.updateSalary(newBonusSal);
    })

    }
}