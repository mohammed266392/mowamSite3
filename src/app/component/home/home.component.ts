import { Component } from '@angular/core';
import { Landing4Component } from '../landing4/landing4.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Landing4Component],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
