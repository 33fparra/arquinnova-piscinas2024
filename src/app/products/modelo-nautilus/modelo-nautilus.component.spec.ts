import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeloNautilusComponent } from './modelo-nautilus.component';

describe('ModeloNautilusComponent', () => {
  let component: ModeloNautilusComponent;
  let fixture: ComponentFixture<ModeloNautilusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeloNautilusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModeloNautilusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
