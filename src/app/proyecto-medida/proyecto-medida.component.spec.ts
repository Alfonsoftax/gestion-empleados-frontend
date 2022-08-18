import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectoMedidaComponent } from './proyecto-medida.component';

describe('ProyectoMedidaComponent', () => {
  let component: ProyectoMedidaComponent;
  let fixture: ComponentFixture<ProyectoMedidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectoMedidaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyectoMedidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
