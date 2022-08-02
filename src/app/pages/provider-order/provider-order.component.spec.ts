import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderOrderComponent } from './provider-order.component';

describe('ProviderOrderComponent', () => {
  let component: ProviderOrderComponent;
  let fixture: ComponentFixture<ProviderOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProviderOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProviderOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
