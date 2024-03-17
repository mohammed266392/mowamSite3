import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-landing4',
  standalone: true,
  imports: [NgClass],
  templateUrl: './landing4.component.html',
  styleUrl: './landing4.component.css'
})
export class Landing4Component {
  text = 'Creative'; // Texte initial
  texts = ['Creative', 'Confiance', 'Fort'];
  currentIndex = 0;
  activateEffect = false;
  // private intervalId: any;

  constructor() { 
// Change le texte toutes les secondes
    setInterval(() => {
      this.activateEffect = true
      
    }, 2900);

    setInterval(() => {

      this.text = this.texts[this.currentIndex];
      if(this.currentIndex + 1 == this.texts.length){
        this.currentIndex = 0;
      }else{
        this.currentIndex = this.currentIndex + 1 ;
      }
      this.activateEffect = false;
    }, 3000); 
  }

}
