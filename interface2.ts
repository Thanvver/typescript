interface OnInt{

    ngOnInt()
}

interface OnChange{

    ngOnChange()
}

class MyComponent implements OnInt,OnChange{

    ngOnInt() {
        console.log("change method");
        
    }
    ngOnChange(){
        console.log("ng on change");
        
    }

}