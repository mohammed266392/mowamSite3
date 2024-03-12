import { Component, Input, OnInit } from '@angular/core';
import { NgClass, NgFor } from '@angular/common';
import { Router } from '@angular/router';
import { Onglet, SousOnglet } from '../../../models/object';

@Component({
    selector: 'app-ongletsplus-mobile',
    templateUrl: './ongletsplus-mobile.component.html',
    styleUrls: ['./ongletsplus-mobile.component.css'],
    standalone: true,
    imports: [NgClass, NgFor]
})
export class OngletsPlusMobileComponent implements OnInit {

  @Input() onglets : Onglet[] = []
  @Input() isClicked : boolean = false

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateTo(onglet : Onglet): void{
    if(onglet.getSousOnglets().length == 0){
      this.router.navigateByUrl("/"+onglet.getNameNavigate())
    } else {
      this.onglets[onglet.getId()].toogleSousOngletsIsOpen()
      console.log('cette onglet ',onglet.getId())
      console.log('cette onglet est open : ',this.onglets[onglet.getId()])
    }
  }

  navigateToSousOnglets(sousOnglet : SousOnglet): void{
    this.router.navigateByUrl("/"+sousOnglet.getNameNavigate())
  }

}
