import { Injectable, inject, signal } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FirebaseError } from 'firebase/app';
import { getFireBaseErrorMessage } from '../utilities/auth-errors';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  snackBar = inject(MatSnackBar)

  loading = signal(false)

  loading2 = signal(false)

  
  showLoading(){
    this.loading.set(true)
  }
  hidLoading(){
    this.loading.set(false)
  }

  showLoading2(){
    this.loading2.set(true)
  }
  hidLoading2(){
    this.loading2.set(false)
  }

  success(message : string){
    this.snackBar.open(message, 'Fermer', {
      duration: 4000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    })
  }

  error(message : string){
    this.snackBar.open(message, 'Fermer', {
      duration: 4000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    })
  }

  fireBaseError(error : FirebaseError) {
    this.error(getFireBaseErrorMessage(error))
  }

}
