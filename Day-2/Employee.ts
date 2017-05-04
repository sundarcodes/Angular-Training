export class Employee {
    id: number;
    name: string;
    salary: number;
    rating: number;
    constructor(id: number, name: string, salary: number, rating: number) {
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.rating = rating;
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

