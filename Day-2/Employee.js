"use strict";
exports.__esModule = true;
var Employee = (function () {
    function Employee(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
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
    return Employee;
}());
exports.Employee = Employee;
