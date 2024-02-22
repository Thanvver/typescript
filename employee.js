var employee = /** @class */ (function () {
    function employee(name, age, salary, dept) {
        this.name = name;
        this.age = age;
        this.salary = salary;
        this.department = dept;
    }
    employee.prototype.displayEmployee = function () {
        console.log(this.name, this.age, this.salary, this.department);
    };
    return employee;
}());
var obj1 = new employee("thanveer", 21, 60000, "hr");
obj1.displayEmployee();
