import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobNoticesComponent } from './job-notices.component';

describe('JobNoticesComponent', () => {
  let component: JobNoticesComponent;
  let fixture: ComponentFixture<JobNoticesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobNoticesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobNoticesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
