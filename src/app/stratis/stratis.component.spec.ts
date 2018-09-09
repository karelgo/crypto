import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StratisComponent } from './stratis.component';

describe('StratisComponent', () => {
  let component: StratisComponent;
  let fixture: ComponentFixture<StratisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StratisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StratisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
