import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeaderService } from '../../services/header.service';

@Component({
  selector: 'app-work-space',
  standalone: true,
  imports: [],
  templateUrl: './work-space.component.html',
  styleUrl: './work-space.component.css'
})
export class WorkSpaceComponent {
  constructor(private route: ActivatedRoute, private headerService: HeaderService) {
    const data = this.route.snapshot.data;
    if (data['header']) {
      this.headerService.setHeaderComponent(data['header']);
    }
  }
}
