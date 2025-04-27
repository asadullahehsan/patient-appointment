import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientVisitFormComponent } from './patient-visit-form.component';

describe('PatientVisitFormComponent', () => {
  let component: PatientVisitFormComponent;
  let fixture: ComponentFixture<PatientVisitFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatientVisitFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientVisitFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
