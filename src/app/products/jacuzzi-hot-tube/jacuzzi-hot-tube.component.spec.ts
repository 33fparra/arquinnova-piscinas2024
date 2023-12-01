import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JacuzziHotTubeComponent } from './jacuzzi-hot-tube.component';

describe('JacuzziHotTubeComponent', () => {
  let component: JacuzziHotTubeComponent;
  let fixture: ComponentFixture<JacuzziHotTubeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JacuzziHotTubeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JacuzziHotTubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
