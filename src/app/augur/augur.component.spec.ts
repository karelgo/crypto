import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AugurComponent } from './augur.component';

describe('AugurComponent', () => {
  let component: AugurComponent;
  let fixture: ComponentFixture<AugurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AugurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AugurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
