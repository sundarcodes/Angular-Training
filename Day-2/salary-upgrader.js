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
            var oldSalary = emp.getSalary();
            var bonusAmt = 0;
            switch (emp.getRating()) {
                case 5: {
                    bonusAmt = 100000;
                    break;
                }
                case 4: {
                    bonusAmt = 75000;
                    break;
                }
                case 3: {
                    bonusAmt = 50000;
                    break;
                }
                default: {
                    bonusAmt = 0;
                    break;
                }
            }
            var addBonus = oldSalary + bonusAmt;
            emp.updateSalary(addBonus);
        });
    };
    return SalaryUpgrader;
}());
exports.SalaryUpgrader = SalaryUpgrader;
