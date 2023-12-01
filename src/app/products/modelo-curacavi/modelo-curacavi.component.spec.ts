import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeloCuracaviComponent } from './modelo-curacavi.component';

describe('ModeloCuracaviComponent', () => {
  let component: ModeloCuracaviComponent;
  let fixture: ComponentFixture<ModeloCuracaviComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeloCuracaviComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModeloCuracaviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
