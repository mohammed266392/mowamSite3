import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NosServicesDetailsComponent } from './nos-services-details.component';

describe('NosServicesDetailsComponent', () => {
  let component: NosServicesDetailsComponent;
  let fixture: ComponentFixture<NosServicesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NosServicesDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NosServicesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
