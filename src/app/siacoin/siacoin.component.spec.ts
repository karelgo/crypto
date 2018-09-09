import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiacoinComponent } from './siacoin.component';

describe('SiacoinComponent', () => {
  let component: SiacoinComponent;
  let fixture: ComponentFixture<SiacoinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiacoinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiacoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
