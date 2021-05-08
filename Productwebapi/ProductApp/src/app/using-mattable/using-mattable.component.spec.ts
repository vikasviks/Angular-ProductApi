import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsingMattableComponent } from './using-mattable.component';

describe('UsingMattableComponent', () => {
  let component: UsingMattableComponent;
  let fixture: ComponentFixture<UsingMattableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsingMattableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsingMattableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
