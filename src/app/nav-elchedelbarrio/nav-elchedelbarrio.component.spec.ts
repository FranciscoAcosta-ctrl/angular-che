import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavElchedelbarrioComponent } from './nav-elchedelbarrio.component';

describe('NavElchedelbarrioComponent', () => {
  let component: NavElchedelbarrioComponent;
  let fixture: ComponentFixture<NavElchedelbarrioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavElchedelbarrioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavElchedelbarrioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
