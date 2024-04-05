import { Component, inject } from '@angular/core';
import { OngletService } from '../../services/onglet.service';

@Component({
  selector: 'app-a-propos',
  standalone: true,
  imports: [],
  templateUrl: './a-propos.component.html',
  styleUrl: './a-propos.component.css'
})
export class AProposComponent {
  ongletService = inject(OngletService)

  constructor(){
    this.ongletService.cacherLesOnglets()
  }

}
