import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { OngletService } from '../../services/onglet.service';

@Component({
  selector: 'app-landing4',
  standalone: true,
  imports: [NgClass],
  templateUrl: './landing4.component.html',
  styleUrl: './landing4.component.css'
})
export class Landing4Component {

  router = inject(Router);
  ongletService = inject(OngletService)

 // Texte initial
  test = 'TEST1'; // Texte initial
  texts : string[] = ['Expertise reconnue', '100% transparent', 'Artisant du web'];
  text : string = this.texts[0];
  tests = ['TEST1', 'TEST2', 'TEST3'];
  currentIndex = 0;
  currentIndex1 = 0;
  hide : boolean = false ;
  displaySeconde = 0;

  constructor() { 
    this.cycleActions()
    setInterval(() => {
      this.cycleActions()
    },3500)
    this.ongletService.cacherLesOnglets()
  }

  cycleActions() : void {
    // Première action : masquer après 4500 ms
    setTimeout(() => {
      this.hide = true;
    }, 500);
  
    // Deuxième action : changer l'index après 5000 ms
    setTimeout(() => {
      this.currentIndex = this.currentIndex + 1;
      if (this.currentIndex == this.texts.length) {
        this.currentIndex = 0;
      }
      this.text = this.texts[this.currentIndex];
    }, 1000);
  
    // Troisième action : afficher après 5500 ms
    setTimeout(() => {
      this.hide = false;
    }, 1500);

  }

  navigateToMesService(){
    this.router.navigateByUrl("/nos-services")
  }

}
