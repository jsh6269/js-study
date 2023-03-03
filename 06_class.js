class nameClass{
    constructor(ln, fn){
        this.lastName = ln;
        this.firstName = fn;
    }
    showName(){
        console.log(this.lastName + ", " + this.firstName);
    }
    changeLastName(newLastName){
        this.lastName = newLastName;
    }
}

let sj = new nameClass("Jang", "Suhan");
sj.showName();
sj.changeLastName("Chang");
sj.showName();
