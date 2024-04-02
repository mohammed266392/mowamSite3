import { Component } from '@angular/core';
import { Phrase } from '../../models/object';

@Component({
  selector: 'app-application-web',
  standalone: true,
  imports: [],
  templateUrl: './application-web.component.html',
  styleUrl: './application-web.component.css'
})
export class ApplicationWebComponent {
  title : string = "Application Web"
  subtitle : string = "Pourquoi choisir notre service d'Application Web ?"
  phrases: Phrase[] = [
    {
      firstPhrase: "Personnalisation Avancée",
      secondPhrase: "Votre entreprise n'est pas une solution prête à l'emploi, et votre application web ne devrait pas l'être non plus. Nous construisons des applications web sur-mesure qui s'alignent parfaitement avec votre vision et vos objectifs commerciaux."
    },
    {
      firstPhrase: "Interface Utilisateur Intuitive",
      secondPhrase: "L'expérience utilisateur est au cœur de nos développements. Nous créons des interfaces attrayantes, intuitives et faciles à naviguer, assurant une interaction agréable et efficace pour vos utilisateurs."
    },
    {
      firstPhrase: "Technologie de Pointe",
      secondPhrase: "Utilisant les dernières technologies et les frameworks les plus avancés, nous construisons des applications web robustes, sécurisées et à haute performance, capables de gérer des charges de travail importantes et d'évoluer avec vos besoins."
    },
    {
      firstPhrase: "Intégration de Systèmes",
      secondPhrase: "Nous assurons une intégration fluide avec vos systèmes existants (CRM, ERP, réseaux sociaux, etc.), permettant une synergie parfaite entre votre application web et votre écosystème d'affaires."
    },
    {
      firstPhrase: "Optimisation pour le SEO et le Mobile",
      secondPhrase: "Nous veillons à ce que votre application soit non seulement mobile-friendly mais aussi optimisée pour les moteurs de recherche, maximisant ainsi votre visibilité et votre accessibilité en ligne."
    },
    {
      firstPhrase: "Analytique et Insights",
      secondPhrase: "Bénéficiez d'outils analytiques intégrés pour suivre les performances de votre application, comprendre le comportement des utilisateurs et prendre des décisions éclairées basées sur des données réelles."
    },
    {
      firstPhrase: "Support Continu et Évolutivité",
      secondPhrase: " Notre engagement ne s'arrête pas au lancement. Nous offrons un support continu et des mises à jour régulières pour garantir que votre application reste à la pointe de la technologie et continue de répondre aux exigences changeantes de votre entreprise."
    }
  ];

  conclusion : string = "Investir dans une application web avec nous, c'est choisir un partenaire technologique qui comprend vos besoins et est dédié à transformer vos ambitions en réalité numérique. Contactez-nous aujourd'hui pour discuter de comment nous pouvons aider votre entreprise à prospérer dans le paysage digital."


}

