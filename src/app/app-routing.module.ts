import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from './pages/compartilhado/principal/principal.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/home/login/login.component';
import { SigupComponent } from './pages/home/sigup/sigup.component';

const routes: Routes = [
  { path:'', component: HomeComponent,
    children: [{
      path: '', component: LoginComponent
    }]},
  {path:'sigup', component: SigupComponent},
  {path:'pr',component:PrincipalComponent}
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
