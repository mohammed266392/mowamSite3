import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationWebComponent } from './application-web.component';

describe('ApplicationWebComponent', () => {
  let component: ApplicationWebComponent;
  let fixture: ComponentFixture<ApplicationWebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApplicationWebComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApplicationWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
