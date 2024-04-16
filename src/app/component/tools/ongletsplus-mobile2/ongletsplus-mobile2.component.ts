import { Component, Input } from '@angular/core';
import { Onglet, SousOnglet } from '../../../models/object';
import { Router } from '@angular/router';
import { NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-ongletsplus-mobile2',
  standalone: true,
  imports: [NgClass, NgFor],
  templateUrl: './ongletsplus-mobile2.component.html',
  styleUrl: './ongletsplus-mobile2.component.css'
})
export class OngletsplusMobile2Component {

  @Input() onglets : Onglet[] = []
  @Input() isClicked : boolean = false

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateTo(onglet : Onglet): void{
    console.log(onglet)
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
