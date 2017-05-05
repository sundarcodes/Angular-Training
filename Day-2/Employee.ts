export class Employee {
    id: number;
    name: string;
    salary: number;
    star: number;
    constructor(id: number, name: string, salary: number,star: number) {
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.star = star;
        console.log("Employee Rating :"+star);
    }
    printInfo() {
        console.log(`${this.name} gets ${this.salary}`);
    }
    updateSalary(newSalary: number) {
        this.salary = newSalary;
    }
    getSalary() {
        return this.salary;
    }
    getStar(){
        return this.star;
    }
}

