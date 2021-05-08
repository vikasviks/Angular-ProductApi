import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDirectComponent } from './update-direct.component';

describe('UpdateDirectComponent', () => {
  let component: UpdateDirectComponent;
  let fixture: ComponentFixture<UpdateDirectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateDirectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
