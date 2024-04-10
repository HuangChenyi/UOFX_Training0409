import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectDataComponent } from './select-data.component';

describe('SelectDataComponent', () => {
  let component: SelectDataComponent;
  let fixture: ComponentFixture<SelectDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectDataComponent]
    });
    fixture = TestBed.createComponent(SelectDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
