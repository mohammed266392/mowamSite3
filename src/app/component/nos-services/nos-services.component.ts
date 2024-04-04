import { NgClass, NgFor } from '@angular/common';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ItemService } from '../../models/object';
import { OngletService } from '../../services/onglet.service';
import { Router, RouterModule } from '@angular/router';
import { routes } from '../../app.routes';

@Component({
  selector: 'app-nos-services',
  standalone: true,
  imports: [NgClass, NgFor],
  providers:[],
  templateUrl: './nos-services.component.html',
  styleUrl: './nos-services.component.css'
})
export class NosServicesComponent implements OnInit, OnDestroy{
  valeur: number = 0;
  statisfactionValue: number = 0;
  private intervalId: any;
  private intervalId1: any;
  private delay: number = 50; // Délai initial rapide
  private delaySatisfaction: number = 20; // Délai initial rapide
  items : ItemService[] = [];
  ongletService = inject(OngletService)
  router = inject(Router)

  ngOnInit() {
    this.startCounter();
    this.items = [
      new ItemService(0,"Site vitrine", "Votre Portail vers le Succès en Ligne", "Dans le monde numérique d'aujourd'hui, une présence en ligne n'est pas seulement un avantage, mais une nécessité. Notre service de création de \"Site Vitrine\" est conçu pour propulser votre entreprise sur le devant de la scène digitale, offrant une représentation élégante, professionnelle et sur-mesure de votre marque sur internet.","./../../../assets/images/site-vitrine.jpg","site-vitrine"),
      new ItemService(1,"Application Web", "Des Solutions Web Sur-Mesure", "À l'ère du numérique, une application web performante est cruciale pour se démarquer dans le marché saturé d'aujourd'hui. Notre service de développement d'application web offre des solutions complètes, personnalisées et évolutives pour répondre aux défis uniques de votre entreprise. Transformez votre idée en une application web innovante et convaincante qui engage vos clients et stimule votre croissance.","./../../../assets/images/application-web.jpg","application-web"),
      new ItemService(2,"Site e-commerce", "Transformez Vos Visiteurs en Clients Fidèles", "Dans un marché en ligne en constante évolution, la création d'un site e-commerce qui se démarque est essentielle pour capter l'attention des consommateurs et convertir leur intérêt en ventes. Notre service de création de site e-commerce offre des solutions sur-mesure qui allient esthétique, fonctionnalité et performance pour garantir une expérience d'achat en ligne exceptionnelle.","./../../../assets/images/e-commerce.jpg","e-commerce"),
      new ItemService(2,"Marketing", "Amplifiez Votre Visibilité avec Google Ads et Facebook Ads ...", "Dans l'univers concurrentiel actuel, une stratégie de marketing numérique ciblée et efficace est indispensable pour se démarquer et atteindre votre public cible. Notre service de marketing se spécialise dans l'exploitation de la puissance de Google Ads et Facebook Ads pour propulser votre marque au devant de la scène digitale, en connectant vos produits ou services avec les consommateurs intéressés.","./../../../assets/images/marketing.jpg","marketing")
    ]
    this.ongletService.cacherLesOnglets();
  }

  ngOnDestroy() {
    this.clearCounterInterval();
  }

  private startCounter() {
    this.updateCounter();
    this.updateCounterSatisfaction();
  }
  // 2,1.25,,1.1

  private updateCounter() {

    this.intervalId = setInterval(() => {
      if (this.valeur < 50) {
        this.valeur++;
        // Ajuste le délai à mesure que la valeur augmente
        if (this.valeur === 25) {
          this.delay = 50; // Devient plus lent après 25
        } else if (this.valeur === 40) {
          this.delay = 100; // Devient encore plus lent après 40
        } else if (this.valeur === 45) {
          this.delay = 150; // Devient encore plus lent après 40
        }
        // Réinitialise l'intervalle avec le nouveau délai
        this.clearCounterInterval();
        this.updateCounter();
      } else {
        this.clearCounterInterval();
      }
    }, this.delay);
  }
  private updateCounterSatisfaction() {
    this.intervalId1 = setInterval(() => {
      if (this.statisfactionValue < 100) {
        this.statisfactionValue++;
        // Ajuste le délai à mesure que la valeur augmente
        if (this.statisfactionValue === 75) {
          this.delaySatisfaction = 100; // Devient plus lent après 25
        } else if (this.statisfactionValue === 85) {
          this.delaySatisfaction = 200; // Devient encore plus lent après 40
        } else if (this.statisfactionValue === 95) {
          this.delaySatisfaction = 300; // Devient encore plus lent après 40
        }
        // Réinitialise l'intervalle avec le nouveau délai
        this.clearCounterIntervalSatisfaction();
        this.updateCounterSatisfaction();
      } else {
        this.clearCounterIntervalSatisfaction();
      }
    }, this.delaySatisfaction);

  }

  private clearCounterInterval() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
    
  }
  
  private clearCounterIntervalSatisfaction() {
    if (this.intervalId1) {
      clearInterval(this.intervalId1);
      this.intervalId1 = null;
    }
  }

  navigate(linkEnsavoirPlus : string){
    this.router.navigateByUrl(linkEnsavoirPlus)
  }


}


