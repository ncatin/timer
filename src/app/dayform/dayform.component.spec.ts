import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayformComponent } from './dayform.component';

describe('DayformComponent', () => {
  let component: DayformComponent;
  let fixture: ComponentFixture<DayformComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DayformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
