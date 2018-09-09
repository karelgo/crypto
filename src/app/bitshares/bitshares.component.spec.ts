import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BitsharesComponent } from './bitshares.component';

describe('BitsharesComponent', () => {
  let component: BitsharesComponent;
  let fixture: ComponentFixture<BitsharesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BitsharesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BitsharesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
