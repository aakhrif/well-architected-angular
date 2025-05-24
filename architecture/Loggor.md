A centralized logging system in Angular 19+ that:

Logs general app events (via LoggerService)

Automatically tracks HTTP activity (via a functional interceptor, loggerInterceptor)

Reports errors consistently

🔹 Why We Built It
Debugging & Monitoring: Track API calls and errors in development/production.

Consistency: Standardize logging format across the app.

Separation of Concerns: Decouple logging logic from business logic.

Modern Angular Practices: Use standalone components/interceptors (Angular 16+).

🔹 How We Implemented It
1. LoggerService
What: A reusable service for logging messages/errors.

Why: Avoid console.log() sprawl; centralize logging logic.

How:

Used @Injectable({ providedIn: 'root' }) for auto-DI.

Methods: log() for info, error() for failures.

2. HTTP Interceptor (loggerInterceptor)
What: A function (HttpInterceptorFn) that logs HTTP traffic.

Why: Automate logging of all API requests/responses.

How:

Injected LoggerService using inject().

Logged requests before sending and responses/errors after.

Registered in app.config.ts using provideHttpClient(withInterceptors()).

3. Testing (Jasmine/Karma)
What: Verified interceptor logs correctly.

Why: Ensure reliability and catch regressions.

How:

Mocked LoggerService with jasmine.createSpyObj().

Simulated HTTP flows using HttpRequest/HttpResponse.

Used runInInjectionContext for DI in tests.

4. Key Challenges Solved
Injection Context: Fixed NG0203 errors in tests using runInInjectionContext.

Type Safety: Strictly typed HTTP methods ('POST' as const).

Standalone Migration: Removed CoreModule in favor of app.config.ts.

🔹 Outcome
Reliable Logging: All HTTP activity is now tracked.

Maintainable Code: Clear separation between logging and business logic.

Future-Proof: Uses modern Angular practices (functional interceptors, standalone).