class student{

    name:string
    rollno:number
    course:string


    studentDetails(name,rollno,course){

        this.name=name
        this.rollno=rollno
        this.course=course

    }

    displayStudents(){

        console.log(this.name,this.rollno,this.course);
        
    }


}

var obj=new student()
obj.studentDetails("thanveer",12,"python")
obj.displayStudents()