import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OngletsplusMobile2Component } from './ongletsplus-mobile2.component';

describe('OngletsplusMobile2Component', () => {
  let component: OngletsplusMobile2Component;
  let fixture: ComponentFixture<OngletsplusMobile2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OngletsplusMobile2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OngletsplusMobile2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
