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
    addBonus( empList: Employee[]) {
        empList.map(emp => {
            let oldSalary = emp.getSalary();
            var bonusAmt:number=0;
            switch(emp.getRating()){
                case 5:{
                    bonusAmt = 100000;
                    break;
                }
                case 4:{
                    bonusAmt = 75000;
                    break;
                }
                case 3:{
                    bonusAmt = 50000;
                    break;
                }
                default:{
                    bonusAmt =0;
                    break;
                }

            }
            let addBonus = oldSalary+bonusAmt;
            emp.updateSalary(addBonus);
        })   
    }
}