import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WanchainComponent } from './wanchain.component';

describe('WanchainComponent', () => {
  let component: WanchainComponent;
  let fixture: ComponentFixture<WanchainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WanchainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WanchainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
