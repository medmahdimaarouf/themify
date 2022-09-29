import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PapperComponent } from './papper.component';

describe('PapperComponent', () => {
  let component: PapperComponent;
  let fixture: ComponentFixture<PapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
