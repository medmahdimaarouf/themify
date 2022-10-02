import { TestBed } from '@angular/core/testing';

import { CssFontsService } from './css-fonts.service';

describe('CssFontsService', () => {
  let service: CssFontsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CssFontsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
