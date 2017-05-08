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
    addBonus(bonusAmount : number , empList:Employee[]) {
        empList.map(emp =>{
            console.log(emp.rating);
            if(emp.rating > 5){
            let newSalary = emp.getSalary() + bonusAmount;
            emp.updateSalary(newSalary);
            }
        })
    }
}