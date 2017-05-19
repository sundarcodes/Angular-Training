"use strict";
exports.__esModule = true;
var SalaryUpgrader = (function () {
    function SalaryUpgrader() {
    }
    SalaryUpgrader.prototype.incrementSalary = function (percentRaise, empList) {
        empList.map(function (emp) {
            var oldSalary = emp.getSalary();
            var newSalary = (oldSalary * percentRaise / 100) + oldSalary;
            emp.updateSalary(newSalary);
        });
    };
    SalaryUpgrader.prototype.rateEmployee = function (empList) {
        empList.map(function (emp, i) {
            emp.rating = (i + 1) / 2;
        });
    };
    SalaryUpgrader.prototype.addBonus = function (empList) {
        this.rateEmployee(empList);
        empList.map(function (emp) {
            emp.rating >= 4 ? emp.bonus = 1000 : emp.bonus = 0;
        });
    };
    return SalaryUpgrader;
}());
exports.SalaryUpgrader = SalaryUpgrader;
