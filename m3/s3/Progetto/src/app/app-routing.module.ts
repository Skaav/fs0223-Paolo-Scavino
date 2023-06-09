import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'auth', loadChildren: () => import('./page/auth/auth.module').then(m => m.AuthModule) }, { path: 'login', loadChildren: () => import('./page/auth/login/login.module').then(m => m.LoginModule) }, { path: 'register', loadChildren: () => import('./page/auth/register/register.module').then(m => m.RegisterModule) }, { path: 'home', loadChildren: () => import('./page/home/home.module').then(m => m.HomeModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }