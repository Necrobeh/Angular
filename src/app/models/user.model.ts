export class User{
    name : string;
    firstName : string;
    age : number;
    quote : string;
    photo : string;
    visibleAge : boolean;

    constructor(
        name : string, 
        firstName : string, 
        age : number, 
        quote : string, 
        photo : string
        ){
            this.name = name;
            this.firstName = firstName;
            this.age = age;
            this.quote = quote;
            this.photo = photo;
            this.visibleAge = false;
        }

    switchAgeDisplay() : void{
        this.visibleAge = !this.visibleAge;
        }
  }