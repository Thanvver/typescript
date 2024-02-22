class Parent{


m1(){

    console.log("inside parent");
    
}
}

class Child extends Parent{

    m2(){

        console.log("inside child");
        
    }

}

var ch=new Child()
ch.m2()
ch.m1()
