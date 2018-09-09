import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZeroX0xComponent } from './zero-x-0x.component';

describe('ZeroX0xComponent', () => {
  let component: ZeroX0xComponent;
  let fixture: ComponentFixture<ZeroX0xComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZeroX0xComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZeroX0xComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
