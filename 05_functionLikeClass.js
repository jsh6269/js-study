function funClass(){
    this.firstName = "Suhan";
    this.lastName = null;

    this.setLastName = function(lastName){
        this.lastName = lastName;
    };

    this.showName = function(){
        if(this.lastName == null){
            console.log("firstName is", this.firstName);
        }
        else{
            console.log("Name:", this.lastName + ", " + this.firstName);
        }
    }
}

const myClass = new funClass();
myClass.showName();

myClass.setLastName("Jang");
myClass.showName();
