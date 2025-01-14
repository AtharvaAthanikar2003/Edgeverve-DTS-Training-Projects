import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgeMessageComponent } from './age-message.component';

describe('AgeMessageComponent', () => {
  let component: AgeMessageComponent;
  let fixture: ComponentFixture<AgeMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgeMessageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgeMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
