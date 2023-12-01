import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BordesPiscinaComponent } from './bordes-piscina.component';

describe('BordesPiscinaComponent', () => {
  let component: BordesPiscinaComponent;
  let fixture: ComponentFixture<BordesPiscinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BordesPiscinaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BordesPiscinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
