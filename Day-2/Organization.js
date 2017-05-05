"use strict";
exports.__esModule = true;
var Employee_1 = require("./Employee");
var Organization = (function () {
    function Organization(name) {
        this.name = name;
        this.listOfEmployees = [];
    }
    Organization.prototype.createEmployees = function () {
        for (var i = 1; i <= 10; i++) {
            var emp = new Employee_1.Employee(i, 'A' + i, i * 1000, Math.floor(Math.random() * 5) + 1);
            this.listOfEmployees.push(emp);
        }
    };
    Organization.prototype.printEmployeesInfo = function () {
        this.listOfEmployees.map(function (emp) { return emp.printInfo(); });
        //   this.listOfEmployees.map(function(emp) {
        //       return emp.printInfo();
        //   })  
    };
    Organization.prototype.getEmployeeList = function () {
        return this.listOfEmployees;
    };
    return Organization;
}());
exports.Organization = Organization;
