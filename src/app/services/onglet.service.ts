import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OngletService {
  private ongletsSontCaches = new BehaviorSubject<boolean>(false);
  ongletsSontCaches$ = this.ongletsSontCaches.asObservable();

  cacherLesOnglets() {
    this.ongletsSontCaches.next(true);
  }
  nePasCacherLesOnglets() {
    this.ongletsSontCaches.next(false);
  }
}