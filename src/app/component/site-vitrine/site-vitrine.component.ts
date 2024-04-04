import { Component } from '@angular/core';
import { NosServicesDetailsComponent } from '../nos-services-details/nos-services-details.component';
import { Phrase } from '../../models/object';

@Component({
  selector: 'app-site-vitrine',
  standalone: true,
  imports: [NosServicesDetailsComponent],
  templateUrl: './site-vitrine.component.html',
  styleUrl: './site-vitrine.component.css'
})
export class SiteVitrineComponent {

  title : string = "Site Vitrine"
  subtitle : string = "Pourquoi choisir notre service de site vitrine ?"
  phrases: Phrase[] = [
    {
      firstPhrase: "Première Impression Mémorable",
      secondPhrase: "Nous savons que le premier contact est crucial. Notre approche est de créer un design attrayant et professionnel qui capte l'attention dès le premier clic, garantissant une première impression mémorable."
    },
    {
      firstPhrase: "Sur-Mesure et Scalable",
      secondPhrase: "Chaque entreprise est unique. C'est pourquoi nous proposons des solutions personnalisées qui non seulement répondent à vos besoins actuels mais sont également prêtes à évoluer avec votre entreprise."
    },
    {
      firstPhrase: "Optimisé pour le SEO",
      secondPhrase: "Un site vitrine magnifique ne suffit pas, il doit également être trouvé. Nos sites sont optimisés pour le référencement naturel (SEO), améliorant votre visibilité sur les moteurs de recherche et attirant plus de visiteurs."
    },
    {
      firstPhrase: "Expérience Utilisateur Premium",
      secondPhrase: "Une navigation fluide, des temps de chargement rapides et une compatibilité mobile totale assurent une expérience utilisateur sans faille, augmentant la satisfaction et le taux de conversion."
    },
    {
      firstPhrase: "Intégration des Réseaux Sociaux",
      secondPhrase: "Maximisez votre portée et votre engagement en intégrant vos réseaux sociaux, permettant une interaction directe avec votre audience."
    },
    {
      firstPhrase: "Support et Maintenance",
      secondPhrase: "Nous comprenons l'importance d'un site toujours opérationnel. Profitez de notre support réactif et de nos services de maintenance pour garantir la performance continue de votre site."
    }
  ];

  conclusion : string = "Votre investissement dans un Site Vitrine n'est pas seulement un pas vers l'amélioration de votre présence en ligne, mais un bond en avant dans la valorisation de votre marque. Nous sommes là pour transformer votre vision en réalité. Contactez-nous dès aujourd'hui pour commencer votre voyage vers le succès en ligne."


}