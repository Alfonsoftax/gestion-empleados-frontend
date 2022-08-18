import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabajarJuntosComponent } from './trabajar-juntos.component';

describe('TrabajarJuntosComponent', () => {
  let component: TrabajarJuntosComponent;
  let fixture: ComponentFixture<TrabajarJuntosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrabajarJuntosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrabajarJuntosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
