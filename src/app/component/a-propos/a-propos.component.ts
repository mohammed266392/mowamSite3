import { Component, inject } from '@angular/core';
import { OngletService } from '../../services/onglet.service';
import { Observable } from 'rxjs';
import { Storage, ref, getDownloadURL } from '@angular/fire/storage';
import { ActivatedRoute } from '@angular/router';
import { HeaderService } from '../../services/header.service';

@Component({
  selector: 'app-a-propos',
  standalone: true,
  imports: [],
  templateUrl: './a-propos.component.html',
  styleUrl: './a-propos.component.css'
})
export class AProposComponent {
  ongletService = inject(OngletService);
  storage = inject(Storage);
  cvUrl: string | null | undefined;
  route = inject(ActivatedRoute);
  headerService = inject(HeaderService);
  // cvUrl: Observable<string>;
  // firestore = inject(Firestore)
  // cvUrl: Observable<string>;

  constructor(){
    this.ongletService.cacherLesOnglets();
    this.downloadCV();
    const data = this.route.snapshot.data;
    if (data['header']) {
      this.headerService.setHeaderComponent(data['header']);
    }
  }

  async downloadCV(){
    const cvRef = ref(this.storage , "developer-fr-mai-2024.pdf");
    this.cvUrl = await getDownloadURL(cvRef);
  }

}
