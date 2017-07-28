import { TestBed, inject } from '@angular/core/testing';

import { AuthoriserService } from './authoriser.service';

describe('AuthoriserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthoriserService]
    });
  });

  it('should be created', inject([AuthoriserService], (service: AuthoriserService) => {
    expect(service).toBeTruthy();
  }));
});
