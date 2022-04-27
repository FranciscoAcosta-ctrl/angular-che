import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuElchedelbarrioComponent } from './menu-elchedelbarrio.component';

describe('MenuElchedelbarrioComponent', () => {
  let component: MenuElchedelbarrioComponent;
  let fixture: ComponentFixture<MenuElchedelbarrioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuElchedelbarrioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuElchedelbarrioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
