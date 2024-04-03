import { Component } from '@angular/core';
import { Phrase } from '../../models/object';
import { NosServicesDetailsComponent } from '../nos-services-details/nos-services-details.component';

@Component({
  selector: 'app-e-commerce',
  standalone: true,
  imports: [NosServicesDetailsComponent],
  templateUrl: './e-commerce.component.html',
  styleUrl: './e-commerce.component.css'
})
export class ECommerceComponent {
  title : string = "Site E-commerce"
  subtitle : string = "Pourquoi choisir notre service de Création de Site E-commerce ?"
  phrases: Phrase[] = [
    {
      firstPhrase: "Design Attrayant et Personnalisé",
      secondPhrase: "Nous concevons des sites e-commerce qui reflètent l'identité unique de votre marque, captivent vos visiteurs et facilitent la navigation pour une expérience utilisateur optimale."
    },
    {
      firstPhrase: "Fonctionnalités Avancées",
      secondPhrase: "De la gestion de l'inventaire aux paiements sécurisés, en passant par l'intégration de systèmes de gestion de la relation client (CRM), nous équipons votre site des dernières fonctionnalités pour une gestion simplifiée et efficace."
    },
    {
      firstPhrase: "Optimisation Mobile",
      secondPhrase: "Avec la majorité des achats en ligne effectués sur des appareils mobiles, nous assurons que votre site e-commerce offre une expérience d'achat fluide et réactive sur tous les appareils."
    },
    {
      firstPhrase: "SEO et Marketing Digital",
      secondPhrase: "Augmentez votre visibilité en ligne et attirez plus de trafic ciblé grâce à notre expertise en SEO et marketing digital, vous aidant à vous positionner devant vos concurrents sur les moteurs de recherche."
    },
    {
      firstPhrase: "Sécurité Renforcée",
      secondPhrase: "La sécurité de vos données et celles de vos clients est notre priorité. Nous intégrons les meilleures pratiques et technologies pour assurer la sécurité de vos transactions et la confiance de vos clients."
    },
    {
      firstPhrase: "Analyse et Optimisation",
      secondPhrase: "Suivez les performances de votre site grâce à des outils d'analyse intégrés, vous permettant d'ajuster vos stratégies pour maximiser les conversions et la satisfaction client."
    },
    {
      firstPhrase: "Support Technique et Évolutivité",
      secondPhrase: "Bénéficiez de notre assistance technique proactive et de solutions évolutives qui grandissent avec votre entreprise, assurant la longévité et le succès de votre site e-commerce."
    }
  ];

  conclusion : string = "En choisissant notre service de création de site e-commerce, vous optez pour une solution complète qui non seulement lance votre boutique en ligne, mais la propulse vers le succès. Rejoignez-nous pour transformer votre vision en une réalité commerciale florissante. Contactez-nous dès maintenant pour démarrer votre projet e-commerce."

}
