import { Component, Input } from '@angular/core';
import { Phrase } from '../../models/object';
import { NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-nos-services-details',
  standalone: true,
  imports: [NgFor, NgClass],
  templateUrl: './nos-services-details.component.html',
  styleUrl: './nos-services-details.component.css'
})
export class NosServicesDetailsComponent {

  @Input() title?: string 
  
  @Input() subtitle?: string 
  
  @Input() phrases?: Phrase[] 
}
