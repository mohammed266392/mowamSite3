import { Injectable, inject } from '@angular/core';
import { Firestore, addDoc, collection, deleteDoc, doc, getDocs, setDoc, updateDoc } from '@angular/fire/firestore';
import { Order } from '../models/order';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  fireStore = inject(Firestore);
  private ordersSubject = new BehaviorSubject<Order[]>([]);

  // Exposer les orders comme un Observable
  orders$ = this.ordersSubject.asObservable();

  constructor() {}
  // Ajouter un nouvel Order
  async addOrder(order: Order) {
    const collectionRef = collection(this.fireStore, 'orders');
    const docRef = await addDoc(collectionRef, order);
    console.log('Order added with ID: ', docRef.id);
    this.ordersSubject.next([...this.ordersSubject.value, order])
    return docRef;
  }

  // Récupérer tous les Orders
  async getAllOrders(): Promise<void> {
    const collectionRef = collection(this.fireStore, 'orders');
    const snapshot = await getDocs(collectionRef);
    this.ordersSubject.next(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }) as Order));
    // return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }) as Order);
  }

  // Modifier un Order existant
  async updateOrder(order: Order) {
    if (!order.id) throw new Error('Order ID missing');
    const docRef = doc(this.fireStore, `orders/${order.id}`);
    await updateDoc(docRef, {...order});
    console.log('Order updated');
  }

  // Supprimer un Order
  async deleteOrder(orderId: string) {
    const docRef = doc(this.fireStore, `orders/${orderId}`);
    await deleteDoc(docRef);
    console.log('Order deleted');
  }

  // Méthode pour écraser un Order (si nécessaire)
  async setOrder(order: Order) {
    if (!order.id) throw new Error('Order ID missing');
    const docRef = doc(this.fireStore, `orders/${order.id}`);
    await setDoc(docRef, order);
    console.log('Order set/overwritten');
  }

  // add(order : Order){
  //   // order.id = this.fireStore.createId()
  //   // return this.fireStore.collection('/orders').add(order)
  //   const collectionInstance =  collection(this.fireStore,'orders');
  //   addDoc(collectionInstance, order).then(() => {
  //     console.log('data saved')
  //   })
  //   .catch((err) => {
  //     console.log("mon erreur ", err)
  //   })
  // }

  // getList(){
  //   const collectionInstance = collection(this.fireStore, 'orders');
  //   return getDocs(collectionInstance).then(snapshot => {
  //     return snapshot.docs.map(doc => {
  //       return {
  //         ...doc.data() as Order
  //       };
  //     });
  //   }).catch(err => {
  //     console.log("Erreur lors de la récupération des documents: ", err);
  //     throw err; // ou gérer l'erreur d'une autre manière
  //   });
  // }
}
