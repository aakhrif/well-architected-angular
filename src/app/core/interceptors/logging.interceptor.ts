// src/app/core/interceptors/logging.interceptor.ts
import { HttpInterceptorFn } from '@angular/common/http';
import { LoggerService } from '../services/logger.service';
import { inject } from '@angular/core';
import { tap } from 'rxjs';

export const loggerInterceptor: HttpInterceptorFn = (req, next) => {
  const logger = inject(LoggerService); // Inject LoggerService

  logger.log(`HTTP Request: ${req.method} ${req.url}`);

  return next(req).pipe(
    tap({
      next: (event) => logger.log(`HTTP Response: ${req.url}`, event),
      error: (err) => logger.error(`HTTP Error: ${req.url}`, err),
    }),
  );
};