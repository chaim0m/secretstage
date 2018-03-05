import { TestBed, inject } from '@angular/core/testing';

import { ArtistsService } from './artists.service';

describe('DataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArtistsService]
    });
  });

  it('should be created', inject([ArtistsService], (service: ArtistsService) => {
    expect(service).toBeTruthy();
  }));
});
