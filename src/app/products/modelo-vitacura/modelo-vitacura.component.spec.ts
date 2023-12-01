import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeloVitacuraComponent } from './modelo-vitacura.component';

describe('ModeloVitacuraComponent', () => {
  let component: ModeloVitacuraComponent;
  let fixture: ComponentFixture<ModeloVitacuraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeloVitacuraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModeloVitacuraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
