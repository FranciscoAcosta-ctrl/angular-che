import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeElchedelbarrioComponent } from './home-elchedelbarrio.component';

describe('HomeElchedelbarrioComponent', () => {
  let component: HomeElchedelbarrioComponent;
  let fixture: ComponentFixture<HomeElchedelbarrioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeElchedelbarrioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeElchedelbarrioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
