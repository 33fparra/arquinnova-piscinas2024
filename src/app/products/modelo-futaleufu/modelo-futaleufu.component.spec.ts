import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeloFutaleufuComponent } from './modelo-futaleufu.component';

describe('ModeloFutaleufuComponent', () => {
  let component: ModeloFutaleufuComponent;
  let fixture: ComponentFixture<ModeloFutaleufuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeloFutaleufuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModeloFutaleufuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
