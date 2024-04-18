import { Component, inject } from '@angular/core';
import { OngletsPlusComponent } from '../tools/ongletsplus/ongletsplus.component';
import { NgClass } from '@angular/common';
import { OngletsplusMobile2Component } from '../tools/ongletsplus-mobile2/ongletsplus-mobile2.component';
import { OngletService } from '../../services/onglet.service';
import { Onglet } from '../../models/object';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header3',
  standalone: true,
  imports: [OngletsPlusComponent, NgClass, OngletsplusMobile2Component],
  templateUrl: './header3.component.html',
  styleUrl: './header3.component.css'
})
export class Header3Component {
  router = inject(Router)

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
    this.router.navigateByUrl("/sign-up")
  }
}
