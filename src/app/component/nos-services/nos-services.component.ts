import { NgClass } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-nos-services',
  standalone: true,
  imports: [NgClass  ],
  providers:[],
  templateUrl: './nos-services.component.html',
  styleUrl: './nos-services.component.css'
})
export class NosServicesComponent implements OnInit, OnDestroy{
  valeur: number = 0;
  private intervalId: any;
  private delay: number = 50; // Délai initial rapide

  ngOnInit() {
    this.startCounter();
  }

  ngOnDestroy() {
    this.clearCounterInterval();
  }

  private startCounter() {
    this.updateCounter();
  }

  private updateCounter() {
    this.intervalId = setInterval(() => {
      if (this.valeur < 50) {
        this.valeur++;
        // Ajuste le délai à mesure que la valeur augmente
        if (this.valeur === 25) {
          this.delay = 100; // Devient plus lent après 25
        } else if (this.valeur === 40) {
          this.delay = 200; // Devient encore plus lent après 40
        } else if (this.valeur === 45) {
          this.delay = 300; // Devient encore plus lent après 40
        }
        // Réinitialise l'intervalle avec le nouveau délai
        this.clearCounterInterval();
        this.updateCounter();
      } else {
        this.clearCounterInterval();
      }
    }, this.delay);
  }

  private clearCounterInterval() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

}


