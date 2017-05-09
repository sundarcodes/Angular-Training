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
    SalaryUpgrader.prototype.addBonus = function (empList) {
        empList.map(function (emp) {
            var actualSalary = emp.getSalary();
            var bonusSalary = (actualSalary < 40000 ? actualSalary + 10000 : actualSalary);
            emp.updateSalary(bonusSalary);
        });
    };
    return SalaryUpgrader;
}());
exports.SalaryUpgrader = SalaryUpgrader;
