import { Injectable, inject } from '@angular/core';

import { toSignal } from '@angular/core/rxjs-interop';

import { Auth, User, UserCredential, authState, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from '@angular/fire/auth';

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
  signOut() {
    return signOut(this.firebaseAuth)
  }

  signUp(email : string, password : string){
    return createUserWithEmailAndPassword(this.firebaseAuth,email,password)
  }

  setDisplayName(user : User, name : string){
    return updateProfile(user, {displayName : name});
  }
}


