my-angular-app/
├── .docker/
│   └── nginx.conf
├── .github/
│   └── workflows/
│       └── ci.yml
├── src/
│   ├── app/
│   │   ├── core/
│   │   │   ├── services/
│   │   │   │   ├── form.service.ts
│   │   │   │   ├── logger.service.ts
│   │   │   │   └── cookie-consent.service.ts
│   │   │   ├── interceptors/
│   │   │   │   └── logging.interceptor.ts
│   │   │   └── core.module.ts
│   │   ├── shared/
│   │   │   ├── components/
│   │   │   │   ├── ui/
│   │   │   │   │   ├── button/
│   │   │   │   │   │   ├── button.component.ts
│   │   │   │   │   │   ├── button.component.html
│   │   │   │   │   │   └── button.component.scss
│   │   │   │   │   └── input/
│   │   │   │   ├── cookie-consent/
│   │   │   │   └── logo/
│   │   │   ├── directives/
│   │   │   │   └── auto-focus.directive.ts
│   │   │   └── shared.module.ts
│   │   ├── features/
│   │   │   └── form-page/
│   │   │       ├── form-page.component.ts
│   │   │       └── form-page.routes.ts
│   │   ├── app.component.ts
│   │   └── app.module.ts
│   ├── assets/
│   │   ├── styles/
│   │   │   └── _theme.scss
│   │   └── i18n/
│   ├── environments/
│   └── index.html
├── .storybook/
├── cypress/
├── Dockerfile
├── angular.json
├── README.md
└── package.json