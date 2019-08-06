import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaLogin} from './spa-login.component';

describe('SpaLogin', () => {
  let component: SpaLogin;
  let fixture: ComponentFixture<SpaLogin>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpaLogin ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaLogin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
