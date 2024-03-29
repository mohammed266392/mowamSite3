import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './component/header/header.component';
import { Header2Component } from './component/header2/header2.component';
import { OngletService } from './services/onglet.service';
import { Footer2Component } from './component/footer2/footer2.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header2Component, Footer2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mowamSite3';
  ongletService = inject(OngletService)
}
