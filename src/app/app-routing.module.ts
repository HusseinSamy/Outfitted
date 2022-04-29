import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccountComponent } from './create-account/create-account.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LogInComponent } from './log-in/log-in.component';
import { SwipingPageComponent } from './swiping-page/swiping-page.component';

const routes: Routes = [
  {path:'', component: HomePageComponent},
  {path:'create-account', component: CreateAccountComponent},
  {path:'log-in', component: LogInComponent},
  {path:'main', component: SwipingPageComponent},
  {path:'edit-profile', component: EditProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
