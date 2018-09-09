import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GolemComponent } from './golem.component';

describe('GolemComponent', () => {
  let component: GolemComponent;
  let fixture: ComponentFixture<GolemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GolemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GolemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
