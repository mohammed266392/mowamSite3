import { Component } from '@angular/core';
import { OngletsPlusComponent } from '../tools/ongletsplus/ongletsplus.component';
import { NgClass } from '@angular/common';
import { OngletsPlusMobileComponent } from '../tools/ongletsplus-mobile/ongletsplus-mobile.component';
import { Onglet } from '../../models/object';
import { OngletsplusMobile2Component } from '../tools/ongletsplus-mobile2/ongletsplus-mobile2.component';
import { OngletService } from '../../services/onglet.service';

@Component({
  selector: 'app-header2',
  standalone: true,
  imports: [OngletsPlusComponent, NgClass, OngletsplusMobile2Component],
  templateUrl: './header2.component.html',
  styleUrl: './header2.component.css'
})
export class Header2Component {
  onglets : Onglet[] = [
    new Onglet(0,'Home','home',[]),
    new Onglet(1,'Nos Services','nos-services',[]),
    new Onglet(2,'Contact','contact',[])
  
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

}
