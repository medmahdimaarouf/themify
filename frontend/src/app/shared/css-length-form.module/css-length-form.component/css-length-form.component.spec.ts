import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssLengthFormComponent } from './css-length-form.component';

describe('CssLengthFormComponent', () => {
  let component: CssLengthFormComponent;
  let fixture: ComponentFixture<CssLengthFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CssLengthFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CssLengthFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
