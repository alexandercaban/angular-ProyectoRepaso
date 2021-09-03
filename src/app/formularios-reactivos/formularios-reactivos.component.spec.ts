import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulariosReactivosComponent } from './formularios-reactivos.component';

describe('FormulariosReactivosComponent', () => {
  let component: FormulariosReactivosComponent;
  let fixture: ComponentFixture<FormulariosReactivosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulariosReactivosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulariosReactivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
