"use strict";
exports.__esModule = true;
var SalaryUpgrader = (function () {
    function SalaryUpgrader() {
    }
    SalaryUpgrader.prototype.incrementSalary = function (percentRaise, empList) {
        /*empList.map(emp => {
            let oldSalary = emp.getSalary();
            let newSalary = (oldSalary*percentRaise/100) + oldSalary;
            emp.updateSalary(newSalary);
        })  */
    };
    SalaryUpgrader.prototype.addBonus = function (percentRaise, empList) {
        empList.map(function (emp) {
            var oldSalary = emp.getSalary();
            var newSalary = (oldSalary * percentRaise / 100) + oldSalary;
            emp.updateSalary(newSalary);
        });
    };
    return SalaryUpgrader;
}());
exports.SalaryUpgrader = SalaryUpgrader;
