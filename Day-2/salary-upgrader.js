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
    SalaryUpgrader.prototype.addBonus = function (bonusPer, empList) {
        empList.map(function (emp) {
            var actSalary = emp.getSalary();
            var newSalary = actSalary > 5000 ? ((actSalary * bonusPer / 100) + actSalary) : actSalary;
            emp.updateSalary(newSalary);
        });
    };
    return SalaryUpgrader;
}());
exports.SalaryUpgrader = SalaryUpgrader;
