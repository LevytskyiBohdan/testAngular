import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstPagesComponent } from './pages/first-pages/first-pages.component';
import { SecondPagesComponent } from './pages/second-pages/second-pages.component';
import { UsersHobbyComponent } from './pages/users-hobby/users-hobby.component';
import { AllUsersComponent } from './pages/all-users/all-users.component';
import { AdminComponent } from './pages/admin/admin.component';


const routes: Routes = [
  { path: '', redirectTo: '/first', pathMatch: 'full'},
  { path: 'first', component: FirstPagesComponent},
  { path: 'second', component: SecondPagesComponent},
  { path: 'hobby', component: UsersHobbyComponent},
  { path: 'allUsers', component: AllUsersComponent},
  { path: 'admin', component: AdminComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
