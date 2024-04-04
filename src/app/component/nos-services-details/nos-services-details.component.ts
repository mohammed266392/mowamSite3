import { Component, Input } from '@angular/core';
import { Phrase } from '../../models/object';
import { NgClass, NgFor } from '@angular/common';
import { BoxEffect1Component } from '../tools/box-effect1/box-effect1.component';

@Component({
  selector: 'app-nos-services-details',
  standalone: true,
  imports: [ BoxEffect1Component, NgClass, NgFor],
  templateUrl: './nos-services-details.component.html',
  styleUrl: './nos-services-details.component.css'
})
export class NosServicesDetailsComponent {

  @Input() title?: string 
  
  @Input() subtitle?: string 
  
  @Input() phrases?: Phrase[] 
 
}
