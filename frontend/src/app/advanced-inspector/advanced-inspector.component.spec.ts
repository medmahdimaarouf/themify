import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedInspectorComponent } from './advanced-inspector.component';

describe('AdvancedInspectorComponent', () => {
  let component: AdvancedInspectorComponent;
  let fixture: ComponentFixture<AdvancedInspectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvancedInspectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedInspectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
