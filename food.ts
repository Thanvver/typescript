interface Food{

    name:string
    having()

}

class biriyani implements Food{

    name:string
    constructor(name){

        this.name=name
    }

    having() {
        console.log("having",this.name);
        
    }
}

class mandhi implements Food{

    name:string;
    constructor(name){
        this.name=name
    }
    having() {
        console.log("having",this.name);
        
    }
}

class customer{

    dish:Food
    constructor(foodObject:Food){ //dependancy injection

        this.dish=foodObject

    }

    eating(){
        this.dish.having()
    }
}

var biriyaniObj=new biriyani("chicken biriyani")
var mandhiObj=new mandhi("chicken mandhi")
var customer1=new customer(mandhiObj)
customer1.eating()