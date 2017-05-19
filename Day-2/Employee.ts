export class Employee {
    id: number;
    name: string;
    salary: number;
    rating: number;
    bonus: number;
    constructor(id: number, name: string, salary: number) {
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.rating = 0;
        this.bonus = 0;
    }
    printInfo() {
        console.log(`${this.name} gets ${this.salary} and bonus ${this.bonus} with rating ${this.rating}`);
    }
    updateSalary(newSalary: number) {
        this.salary = newSalary;
    }
    getSalary() {
        return this.salary;
    }
}

