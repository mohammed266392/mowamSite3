import { Component } from '@angular/core';
import { Phrase } from '../../models/object';
import { NosServicesDetailsComponent } from '../nos-services-details/nos-services-details.component';

@Component({
  selector: 'app-marketing',
  standalone: true,
  imports: [NosServicesDetailsComponent],
  templateUrl: './marketing.component.html',
  styleUrl: './marketing.component.css'
})
export class MarketingComponent {
  title : string = "Site E-commerce"
  subtitle : string = "Pourquoi choisir notre service de Marketing avec Google Ads et Facebook Ads ?"
  phrases: Phrase[] = [
    {
      firstPhrase: "Stratégies Personnalisées",
      secondPhrase: "Nous comprenons que chaque entreprise est unique. C'est pourquoi nous créons des stratégies de marketing sur mesure qui correspondent à vos objectifs spécifiques, que ce soit pour augmenter la notoriété de la marque, générer des leads ou stimuler les ventes."
    },
    {
      firstPhrase: "Expertise Google Ads",
      secondPhrase: "Profitez de notre expertise approfondie en Google Ads pour placer vos annonces au sommet des résultats de recherche, capturant l'attention des consommateurs précisément au moment où ils recherchent ce que vous offrez. Notre gestion optimisée des campagnes assure un retour sur investissement maximal."
    },
    {
      firstPhrase: "Maîtrise de Facebook Ads",
      secondPhrase: " Avec notre savoir-faire en Facebook Ads, ciblez avec précision vos publics sur l'une des plateformes sociales les plus populaires. Que ce soit à travers des images captivantes, des vidéos engageantes ou des carrousels interactifs, nous créons des campagnes qui parlent directement à vos prospects."
    },
    {
      firstPhrase: "Analyse et Optimisation Continues",
      secondPhrase: "Le monde du marketing digital évolue rapidement. Nous mettons en œuvre une analyse rigoureuse et une optimisation continue de vos campagnes pour rester à l'avant-garde des tendances, assurant ainsi que vos campagnes conservent leur efficacité et leur pertinence."
    },
    {
      firstPhrase: "Rapports Transparent et Mesurable",
      secondPhrase: "La transparence est clé dans nos services. Recevez des rapports détaillés et compréhensibles, mettant en lumière les performances de vos campagnes, les insights obtenus, et les ajustements stratégiques pour les campagnes futures."
    },
    {
      firstPhrase: "ROI Axé",
      secondPhrase: "Notre objectif principal est de maximiser votre retour sur investissement. À travers une sélection minutieuse des mots-clés, un ciblage démographique précis, et une optimisation des pages de destination, nous veillons à ce que chaque euro dépensé contribue à l'atteinte de vos objectifs."
    }
  ];

  conclusion : string = "Rejoignez-nous pour propulser votre entreprise vers de nouveaux sommets avec notre service de marketing spécialisé dans Google Ads et Facebook Ads. Ensemble, transformons vos ambitions en résultats tangibles. Contactez-nous dès aujourd'hui pour élaborer une stratégie qui fera de votre marque une référence dans votre domaine."

}
