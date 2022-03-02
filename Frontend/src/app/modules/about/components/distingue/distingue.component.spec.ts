import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistingueComponent } from './distingue.component';

describe('DistingueComponent', () => {
  let component: DistingueComponent;
  let fixture: ComponentFixture<DistingueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistingueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DistingueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
