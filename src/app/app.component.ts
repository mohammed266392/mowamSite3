import { Component, Type, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header2Component } from './component/header2/header2.component';
import { OngletService } from './services/onglet.service';
import { Footer2Component } from './component/footer2/footer2.component';
import { Header3Component } from './component/header3/header3.component';
import { HeaderService } from './services/header.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, Header2Component, Footer2Component, Header3Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mowamSite3';
  ongletService = inject(OngletService)
  headerComponent: Type<any> | null  = null;

  constructor(private headerService: HeaderService) {}

  ngOnInit() {
    this.headerService.getHeaderComponent().subscribe(component => {
      this.headerComponent = component;
    });
  }



}
