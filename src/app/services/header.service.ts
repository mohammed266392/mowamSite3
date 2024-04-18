import { Injectable, Type } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  private headerComponent = new BehaviorSubject<Type<any> | null>(null);

  setHeaderComponent(component: Type<any>) {
    this.headerComponent.next(component);
  }

  getHeaderComponent() {
    return this.headerComponent.asObservable();
  }

}
