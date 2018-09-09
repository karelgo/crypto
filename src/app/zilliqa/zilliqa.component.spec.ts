import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZilliqaComponent } from './zilliqa.component';

describe('ZilliqaComponent', () => {
  let component: ZilliqaComponent;
  let fixture: ComponentFixture<ZilliqaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZilliqaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZilliqaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
