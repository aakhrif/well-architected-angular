import { TestBed } from '@angular/core/testing';
import { LoggerService } from './logger.service';

describe('LoggerService', () => {
  let service: LoggerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoggerService]
    });
    service = TestBed.inject(LoggerService);
  });

  it('should log', () => {
    spyOn(console, 'log');
    service.log('test');
    expect(console.log).toHaveBeenCalledWith('[LOG]', 'test');
  });
});
