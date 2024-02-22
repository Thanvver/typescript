interface car{
    start()
    accelerate()
    stop()
}

interface vehicle{
    on()
    Off()
}

class swift implements car,vehicle{
    start() {
        console.log("swift starts");
        
    }
    accelerate() {
        console.log("baleno accelerate");
        
    }
    stop() {
        console.log("bmw stops");
        
    }
    on() {
        console.log("benz on");
        
    }
    Off() {
        console.log("ferrary off");
        
    }
}