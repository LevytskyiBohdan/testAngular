import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersHobbyComponent } from './users-hobby.component';

describe('UsersHobbyComponent', () => {
  let component: UsersHobbyComponent;
  let fixture: ComponentFixture<UsersHobbyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersHobbyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersHobbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
