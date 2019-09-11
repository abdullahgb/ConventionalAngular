import { Routes, RouterModule } from '@angular/router';
import { HomeLayoutComponent } from './layouts/home/home-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import { NotFoundComponent } from './routes/other/not-found/not-found.component';
import { ForbiddenComponent } from './routes/other/forbidden/forbidden.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: HomeLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./routes/home/home.module').then(m => m.HomeModule)
      }
    ]
  },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./routes/auth/auth.module').then(m => m.AuthModule)
      }
    ]
  },
  {
    path: 'forbidden',
    component: ForbiddenComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];
