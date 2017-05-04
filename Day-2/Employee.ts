export class Employee {
    id: number;
    name: string;
    salary: number;
    rating: number;
    bonus: number;
    constructor(id: number, name: string, salary: number, rating: number, bonus: number) {
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.rating = rating;
        this.bonus = bonus;
    }
    printInfo() {
        console.log(`${this.name} gets ${this.salary} and bonus ${this.bonus}`);
    }
    updateSalary(newSalary: number) {
        this.salary = newSalary;
    }
    getSalary() {
        return this.salary;
    }
}

