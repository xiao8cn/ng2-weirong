import { TestBed, inject } from '@angular/core/testing';

import { EntityControlService } from './entity-control.service';

describe('EntityControlService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EntityControlService]
    });
  });

  it('should ...', inject([EntityControlService], (service: EntityControlService) => {
    expect(service).toBeTruthy();
  }));
});
