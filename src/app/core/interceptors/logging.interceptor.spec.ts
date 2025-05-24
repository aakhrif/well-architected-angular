import { runInInjectionContext, EnvironmentInjector } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { HttpRequest, HttpResponse } from '@angular/common/http';
import { of, throwError } from 'rxjs';
import { loggerInterceptor } from './logging.interceptor';
import { LoggerService } from '../services/logger.service';

describe('loggerInterceptor', () => {
  let loggerSpy: jasmine.SpyObj<LoggerService>;
  let injector: EnvironmentInjector;

  beforeEach(() => {
    // Create a spy object with log/error methods
    loggerSpy = jasmine.createSpyObj('LoggerService', ['log', 'error']);
    
    TestBed.configureTestingModule({
      providers: [
        { provide: LoggerService, useValue: loggerSpy } // Provide the mock
      ]
    });

    injector = TestBed.inject(EnvironmentInjector); // Get the injector
  });

  it('should log HTTP requests and successful responses', () => {
    runInInjectionContext(injector, () => {
      const mockRequest = new HttpRequest('GET', '/api/data');
      const mockResponse = new HttpResponse({
        status: 200,
        body: { data: 'test' }
      });
      const mockNext = () => of(mockResponse);

      // Trigger the interceptor
      loggerInterceptor(mockRequest, mockNext).subscribe();

      // Verify request log
      expect(loggerSpy.log).toHaveBeenCalledWith(
        'HTTP Request: GET /api/data'
      );

      // Verify response log (with response object)
      expect(loggerSpy.log).toHaveBeenCalledWith(
        'HTTP Response: /api/data',
        mockResponse
      );
    });
  });

  it('should log HTTP errors', () => {
    runInInjectionContext(injector, () => {
      const mockRequest = new HttpRequest('POST' as const, '/api/save', { data: 'test' });
      const testError = new Error('Test error');
      const errorHandler = () => throwError(() => testError);

      // Trigger the interceptor with error
      loggerInterceptor(mockRequest, errorHandler).subscribe({
        error: () => {
          expect(loggerSpy.error).toHaveBeenCalledWith(
            'HTTP Error: /api/save',
            testError
          );
        }
      });
    });
  });
});