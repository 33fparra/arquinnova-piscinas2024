import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeloPuconComponent } from './modelo-pucon.component';

describe('ModeloPuconComponent', () => {
  let component: ModeloPuconComponent;
  let fixture: ComponentFixture<ModeloPuconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeloPuconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModeloPuconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
