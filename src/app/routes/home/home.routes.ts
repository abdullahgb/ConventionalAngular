import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { HomeLayoutComponent } from 'src/app/layouts/home/home-layout.component';

export const HomeRoutes: Routes = [
  //   {
  //     path: '',
  //     component: HomeLayoutComponent,
  //     children: [
  {
    path: '',
    component: HomeComponent
  }
  //     ]
  //   }
];
