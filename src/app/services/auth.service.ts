import { Injectable, inject } from '@angular/core';
import { Auth, UserCredential, signInWithEmailAndPassword } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  firebaseAuth = inject(Auth)

  login(email : string, password : string) : Promise<UserCredential> {
    return signInWithEmailAndPassword(this.firebaseAuth, email, password)
  }
}
