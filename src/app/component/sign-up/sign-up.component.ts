import { CommonModule, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AbstractControl, AbstractControlOptions, FormBuilder, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { OngletService } from '../../services/onglet.service';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderService } from '../../services/header.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NotificationService } from '../../services/notification.service';

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
  imports: [CommonModule,  MatFormField, MatInputModule, MatButtonModule, ReactiveFormsModule, MatProgressSpinnerModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})


export class SignUpComponent {

  
  ongletService = inject(OngletService);
  fb = inject(FormBuilder);
  authService = inject(AuthService);
  router = inject(Router);
  notification = inject(NotificationService);
  loading = this.notification.loading ;

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
    

  email = this.registerForm.get('email')
  password = this.registerForm.get('password')
  name = this.registerForm.get('name')
  confirmPassword = this.registerForm.get('confirmPassword')

  constructor(private route: ActivatedRoute, private headerService: HeaderService) {
    const data = this.route.snapshot.data;
    if (data['header']) {
      this.headerService.setHeaderComponent(data['header']);
    }
    this.ongletService.cacherLesOnglets()
   }

  goToRegister() : void {
    this.loginDisplay = false
  }

  goToLogin() : void {
    this.loginDisplay = true
  }

  signUp() {

  }

  async login(){
    const {email, password} = this.loginForm.value
    if(!this.loginForm.valid || !email || !password){
      return
    }
    this.notification.showLoading()
    this.authService.login(email, password).then( () => {
      this.router.navigateByUrl("/workspace")
      this.notification.success("Vous êtes connecté")
    }
    ).catch( (error) => {
      this.notification.fireBaseError(error)
    }).finally( () => {
      this.notification.hidLoading()
    })

  }

  signInGoogle(){}


}
