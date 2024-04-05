import { Component } from '@angular/core';

@Component({
  selector: 'app-a-propos',
  standalone: true,
  imports: [],
  templateUrl: './a-propos.component.html',
  styleUrl: './a-propos.component.css'
})
export class AProposComponent {

  title : string = "Derrière le Code : L'Artisan de Votre Espace Web";
  subtitle : string = "Plongez dans l'univers de Mohammed-yassine, un parcours semé d'expériences chez Sopra Steria, Yves Rocher, Michelin, et une passion pour façonner le web de demain."

}
