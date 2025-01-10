import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo02Component } from './demo02.component';

describe('Demo02Component', () => {
  let component: Demo02Component;
  let fixture: ComponentFixture<Demo02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Demo02Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Demo02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
