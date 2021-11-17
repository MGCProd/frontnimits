import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactMenosComponent } from './factmenosactiva.component';

describe('InvoiceComponent', () => {
  let component: FactMenosComponent;
  let fixture: ComponentFixture<FactMenosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FactMenosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FactMenosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
