import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nos-services-details',
  standalone: true,
  imports: [],
  templateUrl: './nos-services-details.component.html',
  styleUrl: './nos-services-details.component.css'
})
export class NosServicesDetailsComponent {

  @Input() title?: string 
}
