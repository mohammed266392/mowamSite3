export interface Order {
    
    id? : string,
    companyName : string,
    fullName :string,
    email:string,
    dateOrder : Date,
    status:string,
    ca : string,

    // toFirestore() {
    //     return {
            // retourne un objet avec uniquement les propriétés que vous voulez stocker dans Firestore
    //         companyName: this.companyName,
    //         fullName: this.fullName,
    //         email: this.email,
    //         dateOrder: this.dateOrder,
    //         status: this.status,
    //         ca: this.ca,
    //         // etc.
    //     };
    // }
}