import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AeternityComponent } from './aeternity.component';

describe('AeternityComponent', () => {
  let component: AeternityComponent;
  let fixture: ComponentFixture<AeternityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AeternityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AeternityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
