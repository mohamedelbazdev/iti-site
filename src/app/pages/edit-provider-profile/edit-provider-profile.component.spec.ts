import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProviderProfileComponent } from './edit-provider-profile.component';

describe('EditProviderProfileComponent', () => {
  let component: EditProviderProfileComponent;
  let fixture: ComponentFixture<EditProviderProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProviderProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditProviderProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
