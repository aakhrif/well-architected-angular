import { Routes } from '@angular/router';
import { FormsPageComponent } from './features/forms-page/forms-page.component';
import { ErrorPageComponent } from './features/error-page/error-page.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

export const routes: Routes = [
    {
        path: '',
        component: MainLayoutComponent,
        children: [
            {
                path: 'buttons',
                title: 'Buttons Demo',
                loadComponent: () => import('./features/buttons-page/buttons-page.component')  // <= Lazy loading
                    .then(m => m.ButtonsPageComponent)
            },
            {
                path: 'forms',
                title: 'Forms Demo',
                component: FormsPageComponent
            },
        ]
    },
    {
        path: 'error',
        title: 'Page Not Found',
        component: ErrorPageComponent
    },
    {
        path: '**',
        redirectTo: 'error'
    }
    
];
