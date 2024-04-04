import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxEffect1Component } from './box-effect1.component';

describe('BoxEffect1Component', () => {
  let component: BoxEffect1Component;
  let fixture: ComponentFixture<BoxEffect1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoxEffect1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BoxEffect1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
