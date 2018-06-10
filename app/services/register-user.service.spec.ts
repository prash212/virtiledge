import { TestBed, inject } from '@angular/core/testing';

import { RegisterUserService } from './register-user.service';

describe('RegisterUserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegisterUserService]
    });
  });

  it('should be created', inject([RegisterUserService], (service: RegisterUserService) => {
    expect(service).toBeTruthy();
  }));
});
