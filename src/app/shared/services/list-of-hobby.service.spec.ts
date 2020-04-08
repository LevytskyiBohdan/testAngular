import { TestBed } from '@angular/core/testing';

import { ListOfHobbyService } from './list-of-hobby.service';

describe('ListOfHobbyService', () => {
  let service: ListOfHobbyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListOfHobbyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
