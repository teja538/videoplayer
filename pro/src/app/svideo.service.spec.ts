import { TestBed } from '@angular/core/testing';

import { SvideoService } from './svideo.service';

describe('SvideoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SvideoService = TestBed.get(SvideoService);
    expect(service).toBeTruthy();
  });
});
