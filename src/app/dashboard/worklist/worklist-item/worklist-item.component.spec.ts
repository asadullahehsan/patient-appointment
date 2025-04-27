import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorklistItemComponent } from './worklist-item.component';

describe('WorklistItemComponent', () => {
  let component: WorklistItemComponent;
  let fixture: ComponentFixture<WorklistItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorklistItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorklistItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
