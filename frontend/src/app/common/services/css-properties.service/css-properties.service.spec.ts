import { TestBed } from '@angular/core/testing';

import { CssPropertiesService } from './css-properties.service';

describe('CssPropertiesService', () => {
  let service: CssPropertiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CssPropertiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
