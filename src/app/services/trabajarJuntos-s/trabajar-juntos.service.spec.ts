import { TestBed } from '@angular/core/testing';

import { TrabajarJuntosService } from './trabajar-juntos.service';

describe('TrabajarJuntosService', () => {
  let service: TrabajarJuntosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrabajarJuntosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
