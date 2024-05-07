import { Component, inject } from '@angular/core';
import { OngletsPlusComponent } from '../tools/ongletsplus/ongletsplus.component';
import { NgClass } from '@angular/common';
import { Onglet } from '../../models/object';
import { OngletsplusMobile2Component } from '../tools/ongletsplus-mobile2/ongletsplus-mobile2.component';
import { OngletService } from '../../services/onglet.service';
import { Router } from '@angular/router';
import { NotificationService } from '../../services/notification.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header2',
  standalone: true,
  imports: [OngletsPlusComponent, NgClass, OngletsplusMobile2Component],
  templateUrl: './header2.component.html',
  styleUrl: './header2.component.css'
})
export class Header2Component {

  router = inject(Router)
  notification = inject(NotificationService)
  auth = inject(AuthService)

  onglets : Onglet[] = [
    new Onglet(0,'Home','home',[]),
    new Onglet(1,'Nos Services','nos-services',[]),
    new Onglet(2,'A propos','a-propos',[])
  
  ]
  ongletsMobile : Onglet[] = [
    new Onglet(0,'Home','home',[]),
    new Onglet(1,'Nos Services','nos-services',[]),
    new Onglet(2,'A propos','a-propos',[]),
    new Onglet(3,'Connexion','sign-up',[]
    )
  
  ]

  title : string = "MOWAM Solution"
  logo : string = "./../../assets/images/logo_solution_piscine.svg"
  menuBurgerIsClicked : boolean = false

  constructor(private ongletService: OngletService) {

    this.ongletService.ongletsSontCaches$.subscribe((value) => {
      if (value) {
        // Mettez à jour votre objet Onglet ici
        this.onglets.forEach( ongletInstance => ongletInstance.setSousOngletsIsOpen(false) );
        this.menuBurgerIsClicked = false
      }
    });
  }

  clickHeader() : void {
    this.menuBurgerIsClicked = !this.menuBurgerIsClicked
  }

  navigateConnection() : void {
    if(this.auth.currentUser()){
      this.notification.showLoading2()
    }
    
    this.router.navigateByUrl("/sign-up")
  }

  navigateToHome() : void {
    this.router.navigateByUrl("/home")
  }

}
