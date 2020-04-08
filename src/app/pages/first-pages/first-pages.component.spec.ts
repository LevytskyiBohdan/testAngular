import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstPagesComponent } from './first-pages.component';

describe('FirstPagesComponent', () => {
  let component: FirstPagesComponent;
  let fixture: ComponentFixture<FirstPagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstPagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
