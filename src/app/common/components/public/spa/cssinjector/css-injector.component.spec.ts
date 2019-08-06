import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { cssInjector } from './css-injector.component';

describe('cssloaderComponent', () => {
  let component: cssInjector;
  let fixture: ComponentFixture<cssInjector>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ cssInjector ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(cssInjector);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});