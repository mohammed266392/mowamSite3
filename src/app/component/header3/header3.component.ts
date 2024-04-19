import { Component, inject } from '@angular/core';
import { OngletsPlusComponent } from '../tools/ongletsplus/ongletsplus.component';
import { NgClass } from '@angular/common';
import { OngletsplusMobile2Component } from '../tools/ongletsplus-mobile2/ongletsplus-mobile2.component';
import { OngletService } from '../../services/onglet.service';
import { Onglet } from '../../models/object';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header3',
  standalone: true,
  imports: [OngletsPlusComponent, NgClass, OngletsplusMobile2Component],
  templateUrl: './header3.component.html',
  styleUrl: './header3.component.css'
})
export class Header3Component {
  router = inject(Router)
  auth = inject(AuthService)
  connexion = this.auth.currentUser

  
  getSomeThing(){
    console.log("connexion1 : ",this.connexion())
  }

  title : string = "MOWAM Solution"
  logo : string = "./../../assets/images/logo_solution_piscine.svg"
  menuBurgerIsClicked : boolean = false

}
