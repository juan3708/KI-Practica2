import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolucionesDigitalesComponent } from './soluciones-digitales.component';

describe('SolucionesDigitalesComponent', () => {
  let component: SolucionesDigitalesComponent;
  let fixture: ComponentFixture<SolucionesDigitalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolucionesDigitalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolucionesDigitalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
