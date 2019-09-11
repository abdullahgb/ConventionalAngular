import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutes } from './app.routes';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeLayoutComponent } from './layouts/home/home-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import { AuthModule } from './routes/auth/auth.module';
import { HomeModule } from './routes/home/home.module';

@NgModule({
  declarations: [AppComponent, HomeLayoutComponent, AuthLayoutComponent],
  imports: [BrowserModule, RouterModule.forRoot(AppRoutes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
