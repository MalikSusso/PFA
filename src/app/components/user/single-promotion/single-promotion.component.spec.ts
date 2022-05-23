import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePromotionComponent } from './single-promotion.component';

describe('SinglePromotionComponent', () => {
  let component: SinglePromotionComponent;
  let fixture: ComponentFixture<SinglePromotionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglePromotionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglePromotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
