import { TestBed } from '@angular/core/testing';

import { AdvancedCssInspectorService } from './advanced-css-inspector.service';

describe('AdvancedCssInspectorService', () => {
  let service: AdvancedCssInspectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdvancedCssInspectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
