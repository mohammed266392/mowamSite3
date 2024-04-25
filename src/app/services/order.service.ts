import { Injectable, inject } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  firebaseAuth = inject(Auth);
  fireStore = inject(Firestore);

  add(order : Order){
    const collectionInstance =  collection(this.fireStore,'orders');
    addDoc(collectionInstance, order).then(() => {
      console.log('data saved')
    })
    .catch((err) => {
      console.log("mon erreur ", err)
    })
  }
}
