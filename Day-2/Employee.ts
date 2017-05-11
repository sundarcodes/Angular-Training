export class Employee {
    id: number;
    name: string;
    salary: number;
    constructor(id: number, name: string, salary: number) {
        this.id = id;
        this.name = name;
        this.salary = salary;
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
}

