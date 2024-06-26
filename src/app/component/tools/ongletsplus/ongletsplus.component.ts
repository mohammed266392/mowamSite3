import { Component, Input, OnInit } from "@angular/core";
import { NgClass, NgFor } from "@angular/common";
import { Router } from "@angular/router";
import { Onglet, SousOnglet } from "../../../models/object";

@Component({
    selector: 'app-onglets-plus',
    templateUrl: './ongletsplus.component.html',
    styleUrls: ['./ongletsplus.component.css'],
    standalone: true,
    imports: [NgClass, NgFor]
})

export class OngletsPlusComponent {
  @Input() onglets: Onglet[] = [];
  constructor(private router: Router) { }

  navigateTo(onglet : Onglet): void{
    if(onglet.getSousOnglets().length == 0){
      this.router.navigateByUrl("/"+onglet.getNameNavigate())
    } else {
      this.onglets[onglet.getId()].toogleSousOngletsIsOpen()
    }
  }

  navigateToSousOnglets(sousOnglet : SousOnglet): void{
    this.router.navigateByUrl("/"+sousOnglet.getNameNavigate())
  }

}
