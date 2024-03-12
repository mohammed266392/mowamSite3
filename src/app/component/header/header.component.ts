import { Component } from '@angular/core';
import { Onglet } from '../../models/object';
import { OngletsPlusComponent } from '../tools/ongletsplus/ongletsplus.component';
import { OngletsPlusMobileComponent } from '../tools/ongletsplus-mobile/ongletsplus-mobile.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [OngletsPlusComponent, NgClass, OngletsPlusMobileComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  onglets : Onglet[] = [
    new Onglet(0,'Home','home',[]),
    new Onglet(1,'Nos Services','services',[]),
    new Onglet(2,'Contact','contact',[])
  
  ]
  title : string = "MOWAM"
  logo : string = "./../../assets/images/logo_solution_piscine.svg"
  menuBurgerIsClicked : boolean = false

  clickHeader() : void {
    this.menuBurgerIsClicked = !this.menuBurgerIsClicked
  }
}
