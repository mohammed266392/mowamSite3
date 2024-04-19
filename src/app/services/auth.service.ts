import { Injectable, inject } from '@angular/core';

import { toSignal } from '@angular/core/rxjs-interop';

import { Auth, UserCredential, authState, signInWithEmailAndPassword } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  firebaseAuth = inject(Auth);
  private authState$ = authState(this.firebaseAuth);
  currentUser = toSignal(this.authState$);



  login(email : string, password : string) : Promise<UserCredential> {
    return signInWithEmailAndPassword(this.firebaseAuth, email, password)
  }
}


