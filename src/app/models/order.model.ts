export class Order{
    constructor(
        public typeOfGoods : string,
        public quantity : number,
        public dateOfToday : Date
    ){}
}