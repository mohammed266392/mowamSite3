import { Component } from '@angular/core';
import { OngletsPlusComponent } from '../tools/ongletsplus/ongletsplus.component';
import { NgClass } from '@angular/common';
import { OngletsPlusMobileComponent } from '../tools/ongletsplus-mobile/ongletsplus-mobile.component';
import { Onglet } from '../../models/object';

@Component({
  selector: 'app-header2',
  standalone: true,
  imports: [OngletsPlusComponent, NgClass, OngletsPlusMobileComponent],
  templateUrl: './header2.component.html',
  styleUrl: './header2.component.css'
})
export class Header2Component {
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
