import { TestBed } from '@angular/core/testing';

import { ProyectoMedidaService } from './proyecto-medida.service';

describe('ProyectoMedidaService', () => {
  let service: ProyectoMedidaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProyectoMedidaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
