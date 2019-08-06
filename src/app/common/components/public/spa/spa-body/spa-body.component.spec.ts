import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaBody } from './spa-body.component';

describe('SpaBody', () => {
  let component: SpaBody;
  let fixture: ComponentFixture<SpaBody>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpaBody ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaBody);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
