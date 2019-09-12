import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutes } from './app.routes';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeLayoutComponent } from './layouts/home/home-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import { NotFoundComponent } from './routes/other/not-found/not-found.component';
import { ForbiddenComponent } from './routes/other/forbidden/forbidden.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    HomeLayoutComponent,
    AuthLayoutComponent,
    NotFoundComponent,
    ForbiddenComponent
  ],
  imports: [BrowserModule, RouterModule.forRoot(AppRoutes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
