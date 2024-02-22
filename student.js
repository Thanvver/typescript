var student = /** @class */ (function () {
    function student() {
    }
    student.prototype.studentDetails = function (name, rollno, course) {
        this.name = name;
        this.rollno = rollno;
        this.course = course;
    };
    student.prototype.displayStudents = function () {
        console.log(this.name, this.rollno, this.course);
    };
    return student;
}());
var obj = new student();
obj.studentDetails("thanveer", 12, "python");
obj.displayStudents();
