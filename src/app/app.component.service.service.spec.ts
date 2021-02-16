import { TestBed } from '@angular/core/testing';

import { App.Component.ServiceService } from './app.component.service.service';

describe('App.Component.ServiceService', () => {
  let service: App.Component.ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(App.Component.ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
