class employee{

    name:string
    age:number
    salary:number
    department:string

    constructor(name,age,salary,dept){

        this.name=name
        this.age=age
        this.salary=salary
        this.department=dept
    }

    displayEmployee(){

        console.log(this.name,this.age,this.salary,this.department);
        
    }



}

var obj1=new employee("thanveer",21,60000,"hr")
obj1.displayEmployee()