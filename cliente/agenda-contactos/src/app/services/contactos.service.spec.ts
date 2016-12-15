/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ContactosService } from './contactos.service';

describe('ContactosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContactosService]
    });
  });

  it('should ...', inject([ContactosService], (service: ContactosService) => {
    expect(service).toBeTruthy();
  }));
});
