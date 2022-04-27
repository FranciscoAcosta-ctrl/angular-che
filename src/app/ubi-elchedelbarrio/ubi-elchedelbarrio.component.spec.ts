import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UbiElchedelbarrioComponent } from './ubi-elchedelbarrio.component';

describe('UbiElchedelbarrioComponent', () => {
  let component: UbiElchedelbarrioComponent;
  let fixture: ComponentFixture<UbiElchedelbarrioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UbiElchedelbarrioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UbiElchedelbarrioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
