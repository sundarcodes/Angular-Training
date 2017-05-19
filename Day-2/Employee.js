"use strict";
exports.__esModule = true;
var Employee = (function () {
    function Employee(id, name, salary, star) {
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.star = star;
        console.log("Employee Rating :" + star);
    }
    Employee.prototype.printInfo = function () {
        console.log(this.name + " gets " + this.salary);
    };
    Employee.prototype.updateSalary = function (newSalary) {
        this.salary = newSalary;
    };
    Employee.prototype.getSalary = function () {
        return this.salary;
    };
    Employee.prototype.getStar = function () {
        return this.star;
    };
    return Employee;
}());
exports.Employee = Employee;
