import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionnairebuilderComponent } from './questionnairebuilder.component';

describe('QuestionnairebuilderComponent', () => {
  let component: QuestionnairebuilderComponent;
  let fixture: ComponentFixture<QuestionnairebuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionnairebuilderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionnairebuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
