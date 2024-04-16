import { CommonModule, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AbstractControl, AbstractControlOptions, FormBuilder, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { OngletService } from '../../services/onglet.service';

export function passwordsMatchValidator() : Validators {
  return (control : AbstractControl) : ValidationErrors | null => {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
    if(password && confirmPassword && password!== confirmPassword){
      return {passwordsDontMatch : true};
    }else{
      return null;
    }
  }
}


@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule,  MatFormField, MatInputModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})


export class SignUpComponent {

  
  ongletService = inject(OngletService)
  fb = inject(FormBuilder);
  loginDisplay = false;
  registerForm = this.fb.group({
    email : ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    name : ['', Validators.required],
    confirmPassword: ['', Validators.required]
  },  { validators : passwordsMatchValidator()}  as AbstractControlOptions)

  loginForm = this.fb.group({
    email : ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  })

  loginEmail = this.loginForm.get('email')
  loginPassword = this.loginForm.get('password')
    
  submitted = false;
  submittedLogin = false;

  email = this.registerForm.get('email')
  password = this.registerForm.get('password')
  name = this.registerForm.get('name')
  confirmPassword = this.registerForm.get('confirmPassword')

  constructor() {
    this.ongletService.cacherLesOnglets()
   }

  get fRegister(): { [key: string]: AbstractControl } {
    return this.registerForm.controls;
  }
  get fLogin(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }
  onSubmitRegister() {
    // Ici, vous pouvez gérer la soumission de votre formulaire
    console.log(this.registerForm.value);
    this.submitted = true
    if(this.submitted){
      return
      // this.httpClient.post<any>(this.urlCreate, this.registerForm.value).subscribe({
      //   next: data => {
      //     console.log('Réponse de la requête POST : ', data);
      //     // Traitez la réponse de la requête ici
      //   },
      //   error: error => {
      //     console.error('Erreur lors de la requête POST : ', error);
      //     // Traitez l'erreur ici
      //   }
      // });
    }
    console.log(this.registerForm.value);
  }

  onSubmitLogin() {
    
    this.submittedLogin = true
    if(this.submittedLogin){
      return
    }
    // Ici, vous pouvez gérer la soumission de votre formulaire
    console.log(this.registerForm.value);
  }

  goToRegister() : void {
    this.loginDisplay = false
  }

  goToLogin() : void {
    this.loginDisplay = true
  }

  signUp() {

  }

  login(){

  }

  signInGoogle(){}


}
