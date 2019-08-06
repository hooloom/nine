import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaFooter } from './spa-footer.component';

describe('SpaFooterComponent', () => {
  let component: SpaFooter;
  let fixture: ComponentFixture<SpaFooter>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpaFooter ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaFooter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
