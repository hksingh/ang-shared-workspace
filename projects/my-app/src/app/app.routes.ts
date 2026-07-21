import { Routes } from '@angular/router';
import { requireAuth, requireNoAuth } from './shared/guards/auth.guard';

export const routes: Routes = [{
    path: 'login',
    canActivate: [requireNoAuth()],
    loadChildren: () => import('./features/login/login-module').then(m => m.LoginModule),
},
{
    path: 'dashboard',
    canActivate: [requireAuth()],
    loadChildren: () => import('./features/dashboard/dashboard-module').then(m => m.DashboardModule),
},
{
    path: 'about',
    canActivate: [requireAuth()],
    loadChildren: () => import('./features/about/about-module').then(m => m.AboutModule),
},
{
    path: 'contact',
    canActivate: [requireNoAuth()],
    loadChildren: () => import('./features/contact/contact-module').then(m => m.ContactModule),
},
{
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
},
];



// loadComponent: () => import('./pages/dashboard/dashboard').then((c) => c.Dashboard),
// https://angular.love/guards-and-resolvers-controlling-navigation-flow