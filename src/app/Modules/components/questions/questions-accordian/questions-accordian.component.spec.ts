import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsAccordianComponent } from './questions-accordian.component';

describe('QuestionsAccordianComponent', () => {
  let component: QuestionsAccordianComponent;
  let fixture: ComponentFixture<QuestionsAccordianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionsAccordianComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionsAccordianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
