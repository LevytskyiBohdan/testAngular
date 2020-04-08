import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondPagesComponent } from './second-pages.component';

describe('SecondPagesComponent', () => {
  let component: SecondPagesComponent;
  let fixture: ComponentFixture<SecondPagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondPagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
