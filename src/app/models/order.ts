export class Order {
    
    constructor(
        public companyName? : string,
        public fullName? :string,
        public email?:string,
        public dateOrder? : Date,
        public status?:string,
        public ca? : string,
        ){}
}