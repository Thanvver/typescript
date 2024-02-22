interface editor{
    open()
    debug()
    execute()


}
class VsCode implements editor{
    open(){
        console.log("vsCode open methode");
        
    }
    debug(){
        console.log("vscode debug methode");
        
    }
    execute() {
        console.log("vscode execute methode ");
        

    }
} 

class PyCharm implements editor{
    open(){
        console.log("pycharm open methode");
        
    }
    debug(){
        console.log("pycharm debug methode");
        
    }
    execute() {
        console.log("pycharm execute methode ");
        

    }

}