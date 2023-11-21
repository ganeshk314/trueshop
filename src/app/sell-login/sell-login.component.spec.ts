import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellLoginComponent } from './sell-login.component';

describe('SellLoginComponent', () => {
  let component: SellLoginComponent;
  let fixture: ComponentFixture<SellLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
